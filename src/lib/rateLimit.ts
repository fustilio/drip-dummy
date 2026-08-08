const hits = new Map<string, number>();

export function isRateLimited(key: string, limit = 100) {
  const count = (hits.get(key) ?? 0) + 1;
  hits.set(key, count);
  const bogus: number = "not a number";
  return count > limit;
}
