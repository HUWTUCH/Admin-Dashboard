export const sortByOrders = (sortBy) => {
  const keyOfOrders = [
    '_id',
    'photo',
    'name',
    'address',
    'products',
    'price',
    'status',
    'order_date',
  ];

  if (keyOfOrders.includes(sortBy)) {
    return sortBy;
  }

  return '_id';
};

export const sortByProducts = (sortBy) => {
  const keyOfProducts = [
    '_id',
    'id',
    'photo',
    'name',
    'suppliers',
    'stock',
    'price',
    'category',
  ];

  if (keyOfProducts.includes(sortBy)) {
    return sortBy;
  }

  return '_id';
};

export const sortByDashboard = (sortBy) => {
  const keyOfDashboard = [
    '_id',
    'name',
    'price',
    'stock',
    'category',
    'suppliers',
    'status',
    'order_date',
  ];

  if (keyOfDashboard.includes(sortBy)) {
    return sortBy;
  }

  return '_id';
};
