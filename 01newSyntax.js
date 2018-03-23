// // var arr1=[1,2,3];
// // var arr2=[7,8,9,10];
// // var newArr=[...arr1,4,5,6,...arr2];
// // console.log(newArr);

// let name="Nag";
// let age=34;

// let dynamicField='office'; // office | vacation

// // ES-5
// // let person={
// //     name:name,
// //     age:age,
// //     sayName:function(){
// //         console.log('im '+this.name);
// //     },
// //     address:'chennai'
// // };
// // ES6
// let newPerson={
//     name,
//     age,
//     sayName(){
//         console.log('im '+this.name);
//     },
//     [dynamicField+"-address"]:'chennai',
//     100:'this is hundred',
//     ['do Something'](){
//         console.log('doing something...');
//     }
// };
// console.log(newPerson);
// dynamicField="home";
// newPerson[dynamicField+"-address"]="Bengalore";
// console.log(newPerson);

// ------------------------------------------------------


let person={
    name:'Nag',
    age:34
}

// let myName=person.name;
// let myAge=person.age;

// or

//let {name:myNewName,age:myNewAge}=person;

 let {name:name,age:age}=person;
// or
// let {name,age}=person;
/* 
let myName;
let myAge;

({name:myName,age:myAge}=person);
 */