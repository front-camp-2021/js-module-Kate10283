export const splitAndMerge = (str = "", separator = "") => {
    // const arr = str.split(" ");
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = arr[i].split("").join(separator);
    // }
    // return arr.join(" ");

    const arr = str.split(" ");
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j == arr[i].length - 1) {
                result += arr[i][j];
            }
            else {
                result += arr[i][j] + separator;
            }
        }
        if (i !== arr.length - 1) {
            result += " ";
        }
    }
    return result;
};
