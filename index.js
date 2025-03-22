const m = ["a", "e", "i", "o", "u"];
const str = "this is a string for check vowels  a e i o u";
const checkVowels = () => {
  let e = 0;
  for (let char of str) {
    if (m.includes(char)) {
      e++;
    }
  }
  return e;
};

console.log(checkVowels());
