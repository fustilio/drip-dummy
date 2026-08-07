import { jsonResponse } from "../lib/http";

export function getReports() {
  return jsonResponse(200, { reports: [] });
}
