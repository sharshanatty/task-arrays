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

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {}
