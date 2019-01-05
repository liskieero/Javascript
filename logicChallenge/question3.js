const compToHex = (comp) => {
  const hex = comp.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

const rgbToHex = (r, g, b) => {
  arr = [r,g,b];
  let hex = arr.map(item => {
    return compToHex(item)
  })
  return `#${hex.join('')}`;
}

rgbToHex(24, 100, 205);
