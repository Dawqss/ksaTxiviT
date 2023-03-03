export const shortName = (name: string) => {
  return name
    .split(',')
    .filter((el, index) => index <= 1)
    .join(',');
};
