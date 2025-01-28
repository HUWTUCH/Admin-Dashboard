import createHttpError from 'http-errors';

export const isValidId = (paramName = 'id') => {
  return (req, res, next) => {
    const id = req.params[paramName]; // Отримуємо ID з параметра
    if (!isValidId(id)) {
      throw createHttpError(400, `Invalid ${paramName}`);
    }
    next(); // Якщо все ок, передаємо запит далі
  };
};
