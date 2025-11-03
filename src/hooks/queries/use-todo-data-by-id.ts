import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { Query_Keys } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string) {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: Query_Keys.todo.detail(id),

    staleTime: 5000,
    gcTime: 5000,

    // refetchOnMount: false,
    // refetchInterval: false,
    // refetchOnReconnect: false,
    // refetchOnWindowFocus: false,
  });
}
