class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// const head=new Node(10)
// head.next=new Node(20)
// console.log(head)
// let temp=head;
// console.log(temp)
// while(temp!==null){
//  console.log(temp.value,"")
//  temp=temp.next
// }

class Linklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newnode = new Node(value);
    if (this.head === null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length++;
  }
  preppend(value) {
    const newnode = new Node(value);
    if (this.head === null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.next = this.head;
      this.head = newnode;
    }
    this.length++;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("index is outof bound");
      return undefined;
    }
    if (index === 0) {
      this.preppend(value);
    } else if (index === this.length) {
      this.append(value);
    } else {
      const newnode = new Node(value);
     let leadingnode=this._traversenode(index-1)
     let holdingnode=leadingnode.next;
     leadingnode.next=newnode;
     newnode.next=holdingnode;
     this.length++;
     
    }
  }
  _traversenode(index){
       let count = 0;
      let leadingnode = this.head;
      while (count < index) {
        leadingnode = leadingnode.next;
        count = count + 1;
      }
      return  leadingnode
  }
  remove(index){
    if(this.length===0){
        console.error("nothing to be deleted")

    }
    else{
         if (index < 0 || index > this.length) {
      console.error("index is outof bound");
      return undefined;
    }
        if(index===0){
            this.head=this.head.next;
        }
        else if(index===this.length-1){
           let previousnode=  this._traversenode(index-1)
           previousnode.next=null
        }
        else{
            let previousnode=this._traversenode(index-1)
            let currentnode=this._traversenode(index)
            previousnode.next=currentnode.next;

        }
        this.length--
    }
  }
  print() {
    let count = 0;
    let node = this.head;
   
    while (count !== this.length) {
      console.log(node.value, "=>");
      node = node.next;
      count += 1;
    }
  }
}

const linkedList = new Linklist();
// linkedList.append(10);

linkedList.remove(0)

linkedList.print();
