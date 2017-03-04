window.age = 12;

function Person(){
  this.age = 34;

  setTimeout(() => {
    console.log(this.age); //34
  }, 1000);

  setTimeout(function(){
    console.log(this.age); //12
  }, 1000);  
}

var p = new Person();


