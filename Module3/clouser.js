
// const createCounter=()=>{
//     let count=0;
//     return(a)=>{
//        count=count+a
//        return count
//     }
    
// }
// const counter=createCounter()
// console.log(counter(2))



//constructor


class Counter{
    constructor(count){
        this.count=count
    }
    add(amount){
        this.count=this.count+amount
    }
    print(){
        console.log(this.count)
    }
}
const counter1=new Counter(1);
counter1.add(10)
counter1.print()
