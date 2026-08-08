import { badRequest, jsonResponse } from "../lib/http";
import { isRateLimited } from "../lib/rateLimit";

export function getUser(id?: string) {
  if (isRateLimited("user")) {
    return jsonResponse(429, { error: "rate limited" });
  }
  if (!id) {
    return badRequest("id is required");
  }
  return jsonResponse(200, { user: null });
}
