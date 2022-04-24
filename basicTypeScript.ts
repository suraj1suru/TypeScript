// basic Types
let id: number = 5;
let company: string = "centuroGlobal";
let isPublished: boolean = true;
let x: any = "hello";

//Arrays
let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, "hello", true];

//tuple
let person: [number, string, boolean] = [1, "brad", true];

//Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "john"],
  [3, "jill"],
];

//Union  for declareation of more than 1 data type
let productId: string | number;
productId = "22";

//enums

enum Direction {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}
// console.log(Direction.down)

// Objects

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
//1 way
// let customerId = <number>cid
//2 way
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(5,8))

// void 
function log(message: string | number){
    console.log(message)
}

log("hello")
