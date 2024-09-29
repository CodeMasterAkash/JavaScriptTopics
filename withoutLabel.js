let val = ["Geeks1", "Geeks2", "Geeks3", "Geeks4"];
let val1 = ["Geeks", "For", "Geeks"]

let print = "";

labelloop: {
    print += val1[0] + "\n";
    print += val1[1] + "\n";
    print += val1[2] + "\n";
}

print += "\n";

labelloop1: {
    print += val[0] + "\n";
    print += val[1] + "\n";
    print += val[2] + "\n";
    print += val[3] + "\n";
}

console.log(print);
