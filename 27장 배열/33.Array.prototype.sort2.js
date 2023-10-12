const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열의 오름차순 정렬, 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬
points.sort((a, b) => a - b);

console.log(points); // [1, 2, 5, 10, 25, 40, 100]

// 숫자 배열의 내림차순 정렬, 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬
points.sort((a, b) => b - a);

console.log(points); // [100, 40, 25, 10, 5, 2, 1 ]
