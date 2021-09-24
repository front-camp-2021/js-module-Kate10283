export const cutStrings = (arr = []) => {
  let minLength;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      minLength = arr[i].length;
    }
    else if (arr[i].length < minLength) {
      minLength = arr[i].length;
    }
  }

  return arr.map(elem => elem.substr(0, minLength));
};
