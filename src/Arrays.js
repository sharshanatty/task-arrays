export function arraySorting(data) {
    let arr = data.split(',');
    arr.map((string) => parseInt(string));
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr.join();
}

export function arrayFiltering(data) {
    return data.filter((i) => i <= 100);
}

export function arrayPushing(array1, array2) {
    let i = 0;
    let res = [];
    while (i < 5) {
        res.push(array1[i]);
        res.push(array2[i]);
        i++;
    }
    return res;
}
