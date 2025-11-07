class Stack {
  constructor() {
    this.arr = [];
  }
  push(value) {
    this.arr.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.arr.pop();
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  print() {
    console.log(this.arr);
  }
}
// Export for CommonJS
module.exports = Stack;
