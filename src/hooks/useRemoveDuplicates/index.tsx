export default function useRemoveDuplicates<T>(
  array: T[],
  duplicateKey: keyof T
): T[] {
  const seen: Set<any> = new Set();
  const result: T[] = [];

  if (array.length) {
    for (const item of array) {
      if (!seen.has(item[duplicateKey])) {
        seen.add(item[duplicateKey]);
        result.push(item);
      }
    }
  }

  return result;
}
