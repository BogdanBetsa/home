//var str = new String("Hello world");
//console.log(str);
//
//var str = new Array(3, 5, 40, 6);
//console.log(str);
//
//var str = new Array(3);
//console.log(str);
//
//var str = new Function("st1", "st2", "console.log(st1*st2)");
//console.log(str(35, 45));

//function Car(){
//   console.log("go");
//}
//var car = new Car();
//console.log(car);

//function Car(e, c, b){
//   this.engine = e;
//    this.color = c;
//    this.brand = b;
//    this.model = "A7";
//}
//var car = new Car("White", "V8", "Audi");
//console.log(car);
//var car2 = new Car("black", "V12", "BMW");
//console.log(car2);

function Car(c, e,){
   this.engine = e;
    this.color = c;
    this.brand = "Audi";
    this.model = "A7";
    this.go = function(speed){
        console.log("go " + speed +" "+this.engine);
    }
};
var car = new Car("white", "V8");
car.go(180);


var t = prompt();
var w = prompt();
function searchStr(text, word){
    
}
searchStr(t, w);
























