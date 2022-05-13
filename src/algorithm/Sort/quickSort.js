// let array = [232,681,90,23,45,910,50,32,9,5,2]
// 快速排序
// function quickSort(arr) {
//     console.log(arr, 'arr')
//     // 跳出循环
//     if( arr.length < 2) {
//         return arr
//     };
//     let flag = arr[0];

//     let left = [];
//     let right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if( arr[i] > flag ) {
//             right.push(arr[i])
//         } else {
//             left.push(arr[i])
//         }
//     };
//     return quickSort(left).concat(flag, quickSort(right));
// };
// console.log(quickSort(array));

function quick1(arr, start, end) {
    //双指针
    let init = start;
    let flag = arr[init];
    start++;

    while(start <= end) {
        while(arr[end] > flag) {
            end--;
        }
        while(arr[start] < flag) {
            start++;
        }
        if (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]];
    return start;
}

function quickSort1(arr, start, end) {
    if (start < end) {
        let index = quick1(arr, start, end); //标志位
        quickSort1(arr, start, index - 1);
        quickSort1(arr, index, end);
    }
    return arr;
}

let array = [232,681,90,23,45,910,50,32,9,5,2]
console.log(array)
const sortData = quickSort1(array, 0, array.length - 1);

console.log("原地排序"+ sortData);