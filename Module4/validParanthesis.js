const Stack = require("./StackNew");

const checkValidParenthesis = (str) => {
  const stack = new Stack();
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  [...str].forEach((char) => {
    console.log(char);
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEmpty()) {
        return false;
      }
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  });

  return stack.isEmpty();
};
console.log(checkValidParenthesis("{()}"));
