const student={
    name : "anas",
    age: 29,
    sj:44,
    getavg(){
        let avg=(this.age+this.sj);
        console.log(`avegare is ${avg}`);
    }
}

function getavg(){
    console.log(this);
}
try{
    console.log(a);
}catch{
    console.log("wrong");
}