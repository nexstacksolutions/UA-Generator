const getRandomVersion = (min, max) => {
  if (!min || !max) return "";
  const major = Math.floor(Math.random() * (max - min + 1)) + min;
  const minor = Math.floor(Math.random() * 10);
  const patch = Math.floor(Math.random() * 10);
  return `${major}.${minor}.${patch}`;
};

export default getRandomVersion;
