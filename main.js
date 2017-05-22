//////var str = new String("Hello world");
//////console.log(str);
//////
//////var str = new Array(3, 5, 40, 6);
//////console.log(str);
//////
//////var str = new Array(3);
//////console.log(str);
//////
//////var str = new Function("st1", "st2", "console.log(st1*st2)");
//////console.log(str(35, 45));
////
//////function Car(){
//////   console.log("go");
//////}
//////var car = new Car();
//////console.log(car);
////
//////function Car(e, c, b){
//////   this.engine = e;
//////    this.color = c;
//////    this.brand = b;
//////    this.model = "A7";
//////}
//////var car = new Car("White", "V8", "Audi");
//////console.log(car);
//////var car2 = new Car("black", "V12", "BMW");
//////console.log(car2);
////
//////function Car(c, e,){
//////   this.engine = e;
//////    this.color = c;
//////    this.brand = "Audi";
//////    this.model = "A7";
//////    this.go = function(speed){
//////        console.log("go " + speed +" "+this.engine);
//////    }
//////};
//////var car = new Car("white", "V8");
//////car.go(180);
//////
//////
//////var t = prompt();
//////var w = prompt();
//////function searchStr(text, word){
//////    
//////}
//////searchStr(t, w);
////var a = prompt("Введите число")
////console.log(eval(a));
//
////Наследование классов в JavaScript
//// 1
////var car = {
////    color: 'white',
////    engine: 'V8',
////    wheels: 4
////}
////var audi = {
////    brand: 'audi',
////    model: 'TT',
////    color: 'black'
////}
////audi.__proto__ = car;
////console.log(audi);
////delete audi.color;
////console.log(audi.color);
//
//// 2
//
////function Audi() {
////    this.color = 'black';
////    this.model = 'TT';
////    this.brand = 'Audi';
////}
////Audi.prototype = {
////    color: 'white',
////    wheels: 4,
////    engine: 'V8'
////}
////var audi = new Audi();
////console.log(audi.engine);
//
////3
//
////function Car() {
////    this.color = 'black';
////    this.model = 'TT';
////    this.brand = 'Audi';
////}
////Audi.prototype = {
////    color: 'white',
////    wheels: 4,
////    engine: 'V8'
////}
////var audi = new Audi();
////console.log(audi.engine);
//
//
////var str = 'Hello world';
////function Str('Hello world'){
////    this.word = 'Hello world';
////}
////Str.prototype = {
////    word: 'ex_'
////}
////
////var str = new Str();
////console.log(Str.addPrefix('ex_'));
//
//
////1 method
////String.prototype.addPrefix = function(p){
////    return p + this;
////}
////var str = 'Hello world';
////console.log(str.addPrefix('ex_'));
//
////1 metho//var a = {
////    color: 'white',
////    size: 340
////}
////var b = a;
////console.log(b.color);
////b.color = 'black';
////console.log(b.color);
////console.log(a.color);
////a.color = 'red';
////console.log(b.color);
//
////2 method
////var a = {
////    color: 'white',
////    size: 340
////}
////var b = Object.create(a);
////console.log(b.color);
////b.color = 'black';
////console.log(b.color);
////console.log(a.color);
////a.color = 'red';
////console.log(b.color);
//
//var a = {
//    color: 'white',
//    size: 340
//}
//var b = Object.assign(a);
//console.log(b.color);
//b.color = 'black';
//console.log(b.color);
//console.log(a.color);
//a.color = 'red';
//console.log(b.color);
//
//var arr = ['Apple', 'Orange'];
//arr.push('Bananas',);
//console.log(arr);

Math.PI
















