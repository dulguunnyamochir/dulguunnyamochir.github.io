// Excercise 1: adding filter function to String
String.prototype.filter = function (arr) {
  return this.split(" ")
    .filter((e) => !arr.includes(e))
    .join(" ");
};
console.log("this is house is not nice!".filter(["house", "not"]));

// Exc 2: adding bubblesort function to Array;
Array.prototype.bubbleSort = function () {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        var temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

//Ex3: Creating Teacher object

var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};

var Student = function () {};
Student.prototype = new Person();
Student.prototype.learn = function (subject) {
  console.log(this.name + " just learned " + subject);
};
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function () {};

Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
  return this.name + " is now teaching: " + subject;
};

var prof = new Teacher();
prof.initialize("TeacherName", 40);
prof.teach("WAP");
