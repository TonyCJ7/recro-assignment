const prefix = "prefix";

let idCounter = 0;

export const joinClass = (...classes: any[]): string =>
  classes
    .filter((item: any): boolean => Boolean(item))
    .map((item: string) =>
      item.startsWith(prefix) ? item : `${prefix}-${item}`
    )
    .join(" ");

export const getUniqueId = (key?: string) => {
  idCounter += 1;
  return `id--${idCounter}${key ? `-${key}` : ""}`;
};
