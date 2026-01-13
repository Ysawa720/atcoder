
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


// //No.2
// function Main(input) {
//     const temp = input.trim().split(" ");
//     const a = parseInt(temp[0], 10);
//     const b = parseInt(temp[1], 10);
//     const product = a * b; 
//     if (product % 2 === 0) {
//         console.log("Even");
//       } else {
//         console.log("Odd");
//       }
// }


// //No.3
// function Main(input) {
//     const count = input.trim().split("").filter(ch => ch === "1");
//     const judge = count.length;
//     console.log(judge); 
// }


// //No.4
function Main(input) {
  const lines = input.trim().split(/\s+/);
  const N = parseInt(lines[0], 10);
  let A = lines.slice(1).map(x => parseInt(x));

  let count = 0;
  while(true) {
    const allEven = A.every(num => num % 2 === 0);

    if(allEven) {
      count++;
      A = A.map( num => num / 2);
    } else {
      break;
    }
  }
  console.log(count);
}

Main(require("fs").readFileSync(0, "utf8"));


