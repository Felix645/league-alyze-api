interface ENV {
  int: () => number,
  string: () => string
}


const env = (key: string, defaults: any = null) : ENV => {
  let value = process.env[key] || defaults;

  const toInt = (): number => {
    return parseInt(<string>value, 10);
  };

  const toString = (): string => {
    return String(value);
  };

  return {
    int: toInt,
    string: toString
  };
};

export default env;

