import { SORT_ORDER } from "../constants/sort-orders.js";
import { sortByOrders, sortByProducts, sortByDashboard } from './sortByHandlers0.js';

const parseSortOrder = (sortOrder) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
  if (isKnownOrder) return sortOrder;
  return SORT_ORDER.ASC;
};

export const parseSortParams = (query, type) => {
  const {sortBy, sortOrder } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  let parsedSortBy;

  // Вибір відповідної функції для сортування залежно від типу
  switch (type) {
    case 'orders':
      parsedSortBy = sortByOrders(sortBy);
      break;
    case 'products':
      parsedSortBy = sortByProducts(sortBy);
      break;
    case 'dashboard':
      parsedSortBy = sortByDashboard(sortBy);
      break;
    default:
      parsedSortBy = '_id'; // Значення за замовчуванням
  }

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};

