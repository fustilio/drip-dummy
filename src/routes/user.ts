import { jsonResponse } from "../lib/http";

export function getUser() {
  return jsonResponse(200, { user: null });
}
