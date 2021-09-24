export const weirdString = (str = "") => {
    let arr = str.toUpperCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 1) {
            let temp = arr[i][arr[i].length - 1].toLowerCase();
            arr[i] = arr[i].slice(0, arr[i].length - 1) + temp;
        }
    }
    return arr.join(" ");
};
