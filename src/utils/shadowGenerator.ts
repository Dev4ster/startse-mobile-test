const interpolate = (
  elevation: number,
  rangeA: number,
  rangeB: number,
  rangeA2: number,
  rangeB2: number,
) =>
  elevation === 0
    ? 0
    : (elevation - rangeA) * ((rangeB2 - rangeA2) / (rangeB - rangeA)) +
      rangeA2;
const shadowGenerator = (elevation = 0) => {
  const height = Math.floor(elevation / 2);
  const blur = elevation + height;

  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height,
    },
    shadowOpacity: Number(interpolate(elevation, 1, 24, 0.2, 0.6).toFixed(2)),
    shadowRadius: Number(interpolate(blur, 1, 38, 1, 16).toFixed(2)),
  };
};
export default shadowGenerator;
