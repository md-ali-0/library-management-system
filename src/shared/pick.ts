const pick = <T extends Record<string, unknown>, K extends keyof T>(
  params: T,
  fields: K[],
): Partial<T> => {
  const finalParams: Partial<T> = {};

  for (const field of fields) {
    if (params && Object.hasOwnProperty.call(params, field)) {
      finalParams[field] = params[field];
    }
  }
  return finalParams;
};

export default pick;
