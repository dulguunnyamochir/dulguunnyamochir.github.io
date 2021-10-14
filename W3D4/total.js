const r2 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
var total = 0;
const getNumber = (num) => {
  if (num == "stop") {
    console.log(total);
    r2.close();
  } else {
    if (isNaN(Number(num))) {
      console.log("Enter valid number!");
    } else {
      total += Number(num);
    }
  }
};

r2.setPrompt('Enter numbers. "stop to stop"');

r2.prompt();

r2.on("line", getNumber);
