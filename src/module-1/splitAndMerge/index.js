export const splitAndMerge = (str = "", separator = "") => {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("").join(separator);
    }
    return arr.join(" ");
};
