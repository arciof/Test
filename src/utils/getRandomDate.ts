const getRandomDate = (): Date => {
  const start = new Date(1970, 0, 1).getTime();
  const end = new Date().getTime();
  const randomTimestamp = Math.floor(Math.random() * (end - start)) + start;

  return new Date(randomTimestamp);
};

export default getRandomDate;
