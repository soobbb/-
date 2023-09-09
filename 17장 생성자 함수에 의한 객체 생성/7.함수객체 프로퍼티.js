function square(num) {
    return num * num;
}

console.log(Object.getOwnPropertyDescriptors(square));

console.log(Object.getOwnPropertyDescriptors(Object.prototype, '__proto__'));
