/**
 * 模拟删除首个数组
 **/

class ArrFirstPositions {

    constructor(arr) {
        this.arr = arr
    }


    reIndex() {

        let newArr = [];

        for (let index = 0; index < this.arr.length; index++) {

            if(this.arr[index] !== undefined ) {
                newArr.push(this.arr[index])
            }
        }

        return newArr
    }


    removeFirstPosition() {
        var leng = this.arr.length;
        if (!leng) return [];

        for (let index = 0; index < leng; index++) {
            this.arr[index] = this.arr[index + 1];
        };
        return this.reIndex(this);
    }
}

var arr = [1, 2, 3, 4, 5]

const ArrFirstPosition = new ArrFirstPositions(arr)
ArrFirstPosition.removeFirstPosition()