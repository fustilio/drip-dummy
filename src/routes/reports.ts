import { jsonResponse } from "../lib/http";
import { isRateLimited } from "../lib/rateLimit";
import { formatDate } from "../lib/date";

export function getReports(page = 1) {
  if (isRateLimited("reports")) {
    return jsonResponse(429, { error: "rate limited" });
  }
  return jsonResponse(200, { reports: [], page });
}

export function getReportsCsv() {
  const header = `generated_at,${formatDate(new Date())}\n`;
  return new Response(header, { headers: { "content-type": "text/csv" } });
}
