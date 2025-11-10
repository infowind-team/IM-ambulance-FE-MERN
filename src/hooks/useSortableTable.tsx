// src/hooks/useSortableTable.ts
import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";

type Order = "asc" | "desc";

export function useSortableTable<T extends Record<string, any>>(
  data: T[],
  initialSortKey?: keyof T,
  initialOrder: Order = "asc"
) {
  const [sortKey, setSortKey] = useState<keyof T | null>(initialSortKey ?? null);
  const [order, setOrder] = useState<Order>(initialOrder);

  const sortedData = useMemo(() => {
    if (!sortKey) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (typeof aVal === "number" && typeof bVal === "number") {
        return order === "asc"
          ? aVal - bVal
          : bVal - aVal;
      }
      if (
        Object.prototype.toString.call(aVal) === "[object Date]" &&
        Object.prototype.toString.call(bVal) === "[object Date]"
      ) {
        return order === "asc"
          ? (aVal as Date).getTime() - (bVal as Date).getTime()
          : (bVal as Date).getTime() - (aVal as Date).getTime();
      }

      const aStr = String(aVal ?? "").toLowerCase();
      const bStr = String(bVal ?? "").toLowerCase();

      return order === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [data, sortKey, order]);

  const requestSort = (key: keyof T) => {
    let newOrder: Order = "asc";
    if (sortKey === key && order === "asc") newOrder = "desc";
    setSortKey(key);
    setOrder(newOrder);
  };

  const getSortIcon = (key: keyof T) => {
    if (sortKey !== key)
      return <ChevronsUpDown className="ml-1 h-4 w-4 opacity-40" />;
    return order === "asc" ? (
      <ChevronUp className="ml-1 h-4 w-4" />
    ) : (
      <ChevronDown className="ml-1 h-4 w-4" />
    );
  };

  return { sortedData, requestSort, getSortIcon, sortKey, order };
}