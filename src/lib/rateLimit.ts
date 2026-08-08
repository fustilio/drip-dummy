const hits = new Map<string, number>();

// default limit chosen to match the free tier quota
export function isRateLimited(key: string, limit = 100) {
  const count = (hits.get(key) ?? 0) + 1;
  hits.set(key, count);
  return count > limit;
}
