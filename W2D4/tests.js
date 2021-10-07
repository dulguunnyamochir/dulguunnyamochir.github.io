// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words.
describe("String.filter", () => {
  it("The function returns the string after removing all the banned words. It removes banned word 'not' from '\"This house is not nice!' and returning '\"This house is nice!'", () => {
    assert.strictEqual(
      '"This house is nice!',
      '"This house is not nice!'.filter("not")
    );
  });
  it("It removes banned word 'and' from '\"Marry and James took the bus' and returning '\"Marry James took the bus'", () => {
    assert.strictEqual(
      '"Marry James took the bus.',
      '"Marry and James took the bus.'.filter("and")
    );
  });
});

// Exercise 2:
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
// that works by repeatedly stepping through the list to be sorted
describe("Array.bubbleSort", () => {
  it("Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted. [6, 4, 0, 3, -2, 1] => [-2, 0, 1, 3, 4, 6]", () => {
    it("[6, 4, 0, 3, -2, 1] => [-2, 0, 1, 3, 4, 6]", () => {
      expect([6, 4, 0, 3, -2, 1].bubbleSort()).deept.to.equal([
        -2, 0, 1, 3, 4, 6,
      ]);
    });
  });

  it("[1, 0, -1, 81, -20] => [-20, -1, 0, 1, 81]", () => {
    it("[1, 0, -1, 81, -20] => [-20, -1, 0, 1, 81]", () => {
      expect([1, 0, -1, 81, -20].bubbleSort()).to.have.same.members([
        -20, -1, 0, 1, 81,
      ]);
    });
  });
});

// Exercise 3
describe("Teacher.prototype.teach", () => {
  it("TeacherName is now teaching: WAP", () => {
    var prof = new Teacher();
    prof.initialize("TeacherName", 40);
    assert.strictEqual(prof.teach("WAP"), "TeacherName is now teaching: WAP");
  });

  it("TeacherNameNotFound is now teaching: Algorithm", () => {
    const teacher = new Teacher();
    teacher.initialize("TeacherNameNotFound", 40);
    assert.strictEqual(
      teacher.teach("Algorithm"),
      "TeacherNameNotFound is now teaching: Algorithm"
    );
  });
});
