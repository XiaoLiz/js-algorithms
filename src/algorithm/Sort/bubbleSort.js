let array = [232,681,90,23,45,910,50,32,9,5,2]

// Javascript sort
// array.sort((a, b) => a - b);
// console.log(array)

// 内部实现机制
function bubbleSort(arr) {
    let leng = arr.length - 1;

    for (let i = 0; i < leng; i++) {
        for (let j = 0; j < leng - i; j++) {
            if(arr[j] > arr[j+1]) {
				// let temp = arr[j];
				// arr[j] = arr[j+1];
				// arr[j+1] = temp;
				[arr[j], arr[j + i]] = [arr[i + 1], arr[j]]
            }
        }
    };
    return arr;
}
console.log(bubbleSort(array), 'array');

