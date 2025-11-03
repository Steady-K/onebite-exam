import { fetchTodos } from "@/api/fetch-todos";
import { Query_Keys } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useTodosData() {
  return useQuery({
    queryFn: fetchTodos,
    queryKey: Query_Keys.todo.list,
  });
}
