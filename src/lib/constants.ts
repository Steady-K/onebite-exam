export const API_URL = "http://localhost:3000";

export const Query_Keys = {
  todo: {
    all: ["todo"],
    list: ["todo", "list"],
    detail: (id: string) => ["todo", "detail", id],
  },
};
