import "./styles.css";

let item = document.querySelector(".item");

console.log(item.clientWidth);

let list = document.querySelector(".list");

list.style.width = 3.17 * item.clientWidth + "px";
