function sessionStart() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching ");
            let self = this;
            let doLearn = function () {
                console.log(this.name + " learning .." + self.name);
            }
            return doLearn;
        }
    }
    function Employee(name) {
        this.name = name;
    }
    let tnr = new Trainer('Nag'); //Constructor invocation
    let e1 = new Employee('San');
    let e2 = new Employee('X');
    let doLearnFunc = tnr.doTeach(); //method invocation
    doLearnFunc.call(e1); //Dynamic funct binding-- call invocation
    let e2Func = doLearnFunc.bind(e2); ////Dynamic funct binding-- call invocation
    e2Func();
    let tnr2 = new Trainer('Praveen');
    console.clear();
    //console.log(tnr2.doTeach());
    console.log(tnr2.doTeach().call(e2));

}
sessionStart(); //Function invocation