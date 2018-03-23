var myFunctions=[];
var myFunctions1=[];

function getI(i){
    var newF=function(){
        console.log(i);
    }
    return newF;
}


for(var i=0;i<3;i++){
 
    var newF=function(){
        console.log(i);
    }

myFunctions.push(newF); 
myFunctions1.push(getI(i)); 

}



//i=null;
//console.log(myFunctions.length);
//console.log(myFunctions[0]);
console.log(myFunctions[1]);
console.log(myFunctions[1]());



console.log(myFunctions1[1]);
console.log(myFunctions1[1]());
//console.log(myFunctions[2]());