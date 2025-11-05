import { fetchTodos } from "@/api/fetch-todos";
import { Query_Keys } from "@/lib/constants";
import type { Todo } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export function useTodosData() {
  const queryClient = useQueryClient();
  return useQuery({
    queryFn: async () => {
      const todos = await fetchTodos();

      todos.forEach((todo) => {
        queryClient.setQueryData<Todo>(Query_Keys.todo.detail(todo.id), todo);
      });

      return todos.map((todo) => todo.id);
    },
    queryKey: Query_Keys.todo.list,
  });
}
