let element = document.createElement("div");
document.body.append(element);

let ten = function() {
    element.innerText = 10;
    setTimeout(nine,1000);
}
let nine = function() {
    element.innerText--;
    setTimeout(eight,1000);
}
let eight = function() {
    element.innerText--;
    setTimeout(seven,1000);
}
let seven = function() {
    element.innerText--;
    setTimeout(six,1000);
}
let six = function() {
    element.innerText--;
    setTimeout(five,1000);
}
let five = function() {
    element.innerText--;
    setTimeout(four,1000);
}
let four = function() {
    element.innerText--;
    setTimeout(three,1000);
}
let three = function() {
    element.innerText--;
    setTimeout(two,1000);
}
let two = function() {
    element.innerText--;
    setTimeout(one,1000);
}
let one = function() {
    element.innerText--;
    setTimeout(independence,1000);
}
let independence = function() {
    element.innerText = "Happy Independence Day";
}

setTimeout(ten,1000);