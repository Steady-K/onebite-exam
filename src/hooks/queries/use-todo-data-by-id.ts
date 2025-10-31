import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string) {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],

    staleTime: 5000,
    gcTime: 5000,

    // refetchOnMount: false,
    // refetchInterval: false,
    // refetchOnReconnect: false,
    // refetchOnWindowFocus: false,
  });
}
