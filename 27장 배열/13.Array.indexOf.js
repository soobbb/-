const arr = [1, 2, 2, 3, 4];

console.log(arr.indexOf(2)); // 1

console.log(arr.indexOf(6)); // -1

// 두 번째 인수는 검색을 시작할 인덱스. 두 번째 인수를 생력하면 처음부터 탐색
console.log(arr.indexOf(2, 2)); // 3

const foods = ["banana", "apple", "orange"];

if (foods.indexOf("water") === -1) {
  foods.push("orange");
}
console.log(foods);
