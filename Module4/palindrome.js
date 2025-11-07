const palindromeChecker = (st) => {
  // 1. Normalize the string
  // Remove all non-alphanumeric characters and convert to lowercase
  const normalizedStr = st.toLowerCase().replace(/[^a-z0-9]/g, "");
  const str = st.toLowerCase();
  const removeCharArray = [
    ",",
    ";",
    ":",
    '"',
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "+",
    "-",
    "=",
    "_",
    ".",
    "?",
    "/",
  ];
  const stringArray = [...str].filter((char) => {
    return !removeCharArray.includes(char);
  });

  console.log(stringArray);
  let startIndex = 0;
  let endIndex = stringArray.length - 1;

  for (let i = 0; i < parseInt(Math.floor(stringArray.length / 2)); i++) {
    if (stringArray[startIndex] !== stringArray[endIndex]) {
      return false;
    }
    startIndex = startIndex + 1;
    endIndex = endIndex - 1;
  }
  return true;
};
console.log(palindromeChecker("Ab?c:ba"));
