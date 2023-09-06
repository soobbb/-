const person = {
  year: "2023",
  age: "30",

  get print() {
    return `현재 연도는 ${this.year}년이고 나이는 ${this.age}세 입니다.`;
  },

  set setYear(year) {
    this.year = year;
  },

  set setAge(age) {
    this.age = age;
  },
};

console.log(person.print); // 1

person.setYear = "2024";
person.setAge = "31";

console.log(person.print); // 2

// 1- 현재 연도는 2023년이고 나이는 30세 입니다.
// 2- 현재 연도는 2024년이고 나이는 31세 입니다.
