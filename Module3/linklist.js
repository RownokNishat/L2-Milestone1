class Node{
    constructor(value){
        this.value=value;
        this.next=null
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

class Linklist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    append(value){
        const newnode=new Node(value)
        if(this.head===null){
            this.head=newnode;
            this.tail=newnode
        }
        else{
            this.tail.next=newnode
            this.tail=newnode
        }
        this.length++
    }
    preppend(){}
    append(){}
    append(){}
    append(){}
}