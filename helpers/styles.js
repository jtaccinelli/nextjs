import chroma from "chroma-js";

export const createColorScale = (base, step) => {
  const dark = chroma.mix(base, "black", 4 * step);
  const light = chroma.mix(base, "white", 4 * step);
  const scale = chroma.scale([light, base, dark]).colors(9);

  return scale.reduce((obj, value, index) => {
    return {
      ...obj,
      [`${index + 1}00`]: value,
    };
  }, {});
};
