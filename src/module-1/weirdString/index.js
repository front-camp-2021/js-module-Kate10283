export const weirdString = (str = "") => {
    // let arr = str.toUpperCase().split(" ");
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].length > 1) {
    //         let temp = arr[i][arr[i].length - 1].toLowerCase();
    //         arr[i] = arr[i].slice(0, arr[i].length - 1) + temp;
    //     }
    // }
    // return arr.join(" ");

    const arr = str.toUpperCase().split(" ");
    let result = "";
    const regexp = new RegExp(`[A-Za-z0-9]`);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (!regexp.test(arr[i][j+1]) || j == arr[i].length - 1) 
          result += arr[i][j].toLowerCase();
        else 
          result += arr[i][j];    
      }
      if (i !== arr.length - 1)
        result += " ";
    }
  return result;
};
