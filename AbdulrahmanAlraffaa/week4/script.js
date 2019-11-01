console.log("JS connected"); // this to check that our script is connected to out HTML

var body = document.querySelector("body");// query select body 
var nickname =  document.getElementById("nickname");// qurey select the ID nickname
var favorites = document.getElementById("favorites");
var hometown = document.getElementById("hometown");


// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties

function actionConfirm(){
    var e = document.getElementById("ddlActions");
    var value = e.options[e.selectedIndex].value;
    (value==1) ? body.style.fontFamily="Arial":(value==2) ? body.style.fontFamily="sans-serif": (value==3) ? body.style.backgroundColor="#a9b2c2":
    (value==4) ? nickname.innerHTML="Abdo": (value==5) ? favorites.innerHTML="Movies": (value==6) ? hometown.innerHTML="Riyadh":
    (value==7) ? changeColorAll() : ""
  
}

function changeColorAll(){
        var x= document.querySelectorAll("body");
        for (let i = 0; i < x.length; i++) {
          x[i].style.color = "#3f4238";
        }
      
}
// change the backgroundColor to a color of your choice

//add some value to nickname Hint: innerHTML

// query select favorites byID
// query select hometown byID
// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';

//change the color of all selectors to colors of your choice, it better be good LOL



// https://www.w3schools.com/jsref/prop_style_color.asp