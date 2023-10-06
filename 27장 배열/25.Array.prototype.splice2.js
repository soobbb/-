const array = [1, 2, 3, 1, 2];
const index1 = array.indexOf(10);
console.log(index1);

// 배열 array에서 item 요소를 제거한다. item 요소가 여러개 존재하면
// 첫 번째 요소만 제거한다.

function remove(array, item) {
  // 제거할 item 요소의 인덱스를 취득한다.
  const index = array.indexOf(item);

  // 제거할 item 요소가 있다면 제거한다.
  if (index !== -1) array.splice(index, 1);
  return array;
}

console.log(remove(array, 10)); // [ 1, 2, 3, 1, 2 ] 
console.log(remove(array, 2)); // [ 1, 3, 1, 2 ]
console.log(remove(array, 10)); // [ 1, 3, 1, 2 ] 원본 배열을 위에서 건드려서 이렇게 나온다.
