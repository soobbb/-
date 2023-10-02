// true
Array.isArray([]);
Array.isArray([1, 2]);
Array.isArray([new Array()]);

// false
Array.isArray();
Array.isArray("Array");
Array.isArray(true);
Array.isArray(1);
Array.isArray({ a: 1 });
