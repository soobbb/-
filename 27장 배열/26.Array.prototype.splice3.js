const array = [1, 2, 3, 1, 2];

// 배열 array에서 모든 item 요소를 제거한다. 
function removeAll(array, item) {
    return array.filter(v => v !== item)
}
console.log(removeAll(array, 2)); // [ 1, 3, 1 ]
