var myFunctions1=[];

function getI(i){
    var newF=function(){
        console.log(i);
        return "-----RETURN'S NOTHING";
    }
    return newF;
}

for(var i=0;i<3;i++){
 
myFunctions1.push(getI(i)); 

}

console.log(myFunctions1[2]);
console.log(myFunctions1[2]());
//console.log(myFunctions[2]());

