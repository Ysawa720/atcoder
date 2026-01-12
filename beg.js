
//No.1
// function Main(input) {
//     input = input.split("\n");
//     tmp = input[1].split(" ");
//     let a = parseInt(input[0], 10);
//     let b = parseInt(tmp[0], 10);
//     let c = parseInt(tmp[1], 10);
//     let d = input[2];
    
//     console.log(a+b+c, d)
// }


//No.2
function Main(input) {
    const temp = input.trim().split(" ");
    const a = parseInt(temp[0], 10);
    const b = parseInt(temp[1], 10);
    const product = a * b; 
    if (product % 2 === 0) {
        console.log("Even");
      } else {
        console.log("Odd");
      }
}
    
Main(require("fs").readFileSync(0, "utf8"));


