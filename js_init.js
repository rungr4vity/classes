

// Class is a reference type and is stored in the heap part of memory 

class Reactor{

    constructor(Level1,Level2)
    {
        this.Level1 = Level1;
        this.Level2 = Level2;
    }

    //getter
    get Info()
    {
        return this.getInfo();
    }

    //method
    getInfo()
    {
        return this.Level1 * this.Level2;
    }
}


// instance
const informacion = new Reactor(5,6);


console.log(informacion.Info);

// node js_init.js
