/*var i = 0;
var sum = 0;
while(i<100){
    if(i%2==0){
        sum = sum+i;
    }
    i++;
}
console.log(sum);



var sum = 0;
for (var i = 0; i<100; i++){
    if(i%3==0){
    sum = sum+i;}
}
console.log(sum);*/



/*var a =["Pikachu","Squirtle"];
console.log(a);
a.push("Magikarp");
console.log(a);
a.unshift("Charmander");
console.log(a);
a.pop();
console.log(a);
a.sort();
console.log(a);



var person = [];
person["firstname"] = "john";
person["lastname"] = "doh" ;
person["age" = "46";
var x = Object.keys(person).length;*/



/*ไม่ใช้อันนี้จ้า มันผิด!! var clickButton = document.getElementById("clickme");
clickButton.onclick = myFunction;*/



function myFunction(){
    alert("HELLOOOOO");
}

function pageLoad(){
    var clickButton = document.getElementById("clickme");
    clickButton.onclick = myFunction;

    var form = document.getElementById("myForm");
    form.onsubmit = myFormfunction;
}

window.onload = pageLoad;



function myFormfunction(){
    alert("OK!!!");
    var x = document.forms["myForm"]["firstname"];
    alert(x.value);
}