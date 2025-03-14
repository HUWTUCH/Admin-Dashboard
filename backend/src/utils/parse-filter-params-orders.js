const parseStatus = (status) => {
  const isString = typeof status === 'string';
  if (!isString) return;
  const isStatus = (status) => ["Processing", "Delivered", "Completed", "Pending", "Shipped", "Confirmed", "Cancelled"].includes(status);

  if (isStatus(status)) return status;
};

const parseNumber = (number) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    return;
  }

  return parsedNumber;
};

export const parseFilterParamsOrders = (query) => {
  const { status, minPrice, maxPrice, minProducts, maxProducts} = query;

  const parsedStatus = parseStatus(status);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxPrice = parseNumber(maxPrice);
  const parsedMinProducts = parseNumber(minProducts);
  const parsedMaxProducts = parseNumber(maxProducts);

  return {
    status: parsedStatus,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice,
    minProducts: parsedMinProducts,
    maxProducts: parsedMaxProducts,
  };
};
