let str = " HELLO";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ') {
    newStr += str[i];
  }
}

console.log(newStr);