function Main(input) {
    input = input.split("\n");
    tmp = input[1].split(" ");
    let a = parseInt(input[0], 10);
    let b = parseInt(tmp[0], 10);
    let c = parseInt(tmp[1], 10);
    let d = input[2];
    
    console.log(a+b+c, d)
}


Main(require("fs").readFileSync(0, "utf8"));
