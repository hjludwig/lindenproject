const getSeason = date => {
  const month = date.getMonth();
  let season = "";
  if (month > 7) {
    season = `${date.getFullYear()}/${date.getFullYear() + 1}`;
  } else {
    season = `${date.getFullYear() - 1}/${date.getFullYear()}`;
  }
  return season;
};

export default getSeason;
