const parseCategory = (category) => {
  const isString = typeof category === 'string';
  if (!isString) return;
  const isCategory = (category) => ["Head", "Medicine", "Heart", "Dental Care", "Leg", "Skin Care"].includes(category);

  if (isCategory(category)) return category;
};

const parseSuppliers = (suppliers) => {
  const isString = typeof suppliers === 'string';
  if (!isString) return;
  const isSuppliers = (suppliers) => ["Beximco", "Square", "Acme", "Uniliver", "ACI"].includes(suppliers);
  if (isSuppliers(suppliers)) return suppliers;
}

// TODO: Duplicated code  
const parseNumber = (number) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    return;
  }

  return parsedNumber;
};
export const parseFilterParamsProducts = (query) => {
  const {category, maxPrice, minPrice, maxStock, minStock, suppliers} = query;

  const parsedCategory = parseCategory(category);
  const parsedSuppliers = parseSuppliers(suppliers);
  const parsedMaxPrice = parseNumber(maxPrice);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxStock = parseNumber(maxStock);
  const parsedMinStock = parseNumber(minStock);

  return {
    category: parsedCategory,
    suppliers: parsedSuppliers,
    maxPrice: parsedMaxPrice,
    minPrice: parsedMinPrice,
    maxStock: parsedMaxStock,
    minStock: parsedMinStock,
  };
};
