export function jsonResponse(status: number, body: unknown) {
  return new Response(JSON.stringify(body), { status });
}

export function badRequest(message: string) {
  if (!message) message = "bad request";
  return jsonResponse(400, { error: message });
}
