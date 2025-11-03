import { CreateTodo } from "@/api/create-todo";
import { Query_Keys } from "@/lib/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CreateTodo,
    onMutate: () => {},
    onSettled: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: Query_Keys.todo.list,
      });
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
