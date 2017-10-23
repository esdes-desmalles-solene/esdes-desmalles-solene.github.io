console.log(document);

function add(x, y){
    return x + y; 
}

console.log(add(10,20));

var name = "Solène";

function changeName(newName){
    name = newName;
    alert(name);
}

function changeClass(newName) {
   var button = document.getElementById("myButton");
   if (button.className == "rotate") {
        button.className = "";
    }else{
        button.className = "rotate";
    }
}
