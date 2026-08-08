const hits = new Map<string, number>();

export function isRateLimited(key: string, limit = 50) {
  const count = (hits.get(key) ?? 0) + 1;
  hits.set(key, count);
  return count > limit;
}
