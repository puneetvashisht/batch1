class Person{
    public name:string;
    constructor(name:string){
        this.name = name
    }  
    public doSomething(){
        console.log('Some functionality');
    }
}

let p = new Person('Ravi');
    p.doSomething();
