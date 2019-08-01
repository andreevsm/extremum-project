export const compose =
  (...functions) => (comp) => functions.reduceRight((prev, f) => f(prev), comp);
