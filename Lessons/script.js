console.log("External script connected.....");
        const a = 10; 
        const b = 10;
        const c = '10';
        console.log(a == b);
        console.log(a == c);
        console.log(a === c);

const x = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function success(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function error() {
  alert("Sorry, no position available.");
}

getLocation()

function onClick(){
    const para = document.getElementById('para')
    para.style.backgroundColor = "red";
}

function onDoubleClick(){

    const para=document.getElementById('para')
    para.style.backgroundColor= "transparent" ;
}

class Course{
    courseName;
    
    constructor(c){
        this.courseName = c;
        console.log("Constructor execute")
    }

    showCourse(){
        console.log("Show course")
    }
}

class Course2 extends Course{

}


let objectone = new Course();

let objecttwo = new Course2()
objecttwo.showCourse()