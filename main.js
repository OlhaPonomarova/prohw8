"use strict";

var user = { id: "block", name: "Anna", age: "28", email: "anna@gmail.com", city: "Dnepr" };

user.list = function (userList) {
    var container = document.getElementById(userList)
    container.innerHTML = `<li> id : ${this.id} </li>  <li> name: ${this.name} </li> <li> age: ${this.age} </li> <li> email: ${this.email} </li> <li> city: ${this.city} </li>`
}
user.list("user-list");

var main = document.querySelector("#user-list");
main.className = "list";
