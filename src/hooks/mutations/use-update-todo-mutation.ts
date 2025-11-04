import { updateTodo } from "@/api/update-todo";
import { Query_Keys } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      await queryClient.cancelQueries({
        queryKey: Query_Keys.todo.list,
      });

      const prevTodos = queryClient.getQueryData<Todo[]>(Query_Keys.todo.list);
      queryClient.setQueryData<Todo[]>(Query_Keys.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.map((prevTodo) =>
          prevTodo.id === updatedTodo.id
            ? { ...prevTodo, ...updatedTodo }
            : prevTodo,
        );
      });
      return {
        prevTodos,
      };
    },
    onError: (error, variable, context) => {
      if (context && context.prevTodos) {
        queryClient.setQueryData<Todo[]>(
          Query_Keys.todo.list,
          context.prevTodos,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: Query_Keys.todo.list,
      });
    },
  });
}
