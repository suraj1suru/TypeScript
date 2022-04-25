class Person{
    private id: number //accees speecifiers
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}

const brad = new Person(1, 'suraj')
const mike = new Person(2, 'Mike JORDAN')

console.log(brad ,mike)

// interfaces for class

interface PersonInterface{
    id: number
    name: string
}

class User5 implements PersonInterface{
    id : number
    name : string
    
    constructor(id: number, name: string){
        this.id =id
        this.name = name
    }
}

//subclasses
class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp)


//Genrics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'john', 'jill'])
