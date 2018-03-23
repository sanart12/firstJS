/*
function Person(name,age)
{
    this.name=name;
    this.age=age;
    this.sayName=function(){ console.log('Time Started: '+Date.now());console.log(this.name+ '#'); return this.name; }
    this.sayAge=function(){console.log( 'time consumed: '+Date.now());console.log("my age : "+this.age);return this.name}
}
let x1=new Person('X1',23);
console.log(x1);
var start;
console.log(x1.sayName()+' age :'+x1.sayAge());


*/
function Person(name,age)
{
    this.name=name;
    this.age=age;
}
Person.prototype.sayName=function(){
    return this.name;
}

Person.prototype.sayAge=function(){
    return this.age;
}

let p1=new Person('XXX',25);
console.log(p1.sayAge());

let p2=new p1;
//Object.defineProperties(p2,'name',configu)

p1.name="My new Name!!";