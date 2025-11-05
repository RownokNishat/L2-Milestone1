class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(value) {
    this.arr.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.arr.shift();
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  print(){
    console.log(this.arr)
  }
}

const queue = new Queue()

queue.enqueue(2)
queue.enqueue(5)
queue.enqueue(8)
queue.enqueue(9)
queue.enqueue(1)
queue.enqueue(3)

queue.print()

console.log(queue.dequeue())

console.log(queue.dequeue())

console.log(queue.dequeue())
queue.print()
