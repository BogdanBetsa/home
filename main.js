Element.prototype.append = function (el) {
    var newEl = document.createElement(el);
    this.appendChild(newEl);
    return newEl;
}

Element.prototype.appendText = function (el) {
    var newEl = document.createTextNode(el);
    this.appendChild(newEl);
}

Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
}

var btn = document.getElementById('btn');
btn.onclick = function () {
    var prod = document.getElementById('newproduct').value;
    var list = document.getElementById('list');
    var newp = list.append('li');
    var ch = newp.append('input');
    ch.setAttribute('type', 'checkbox');
    var s = newp.append('span');
    s.appendText(prod);
    var r = newp.append('span');
    r.appendText(' x');
    r.onclick = function(){
        this.parentElement.remove();
    }
}























//var dx = document.createElement('div');
//var ax = document.createElement('p');
//var ix = document.createElement('p');
//var ex = document.getElementById('ex');
//ex.appendChild(ix);
//var text = document.createTextNode('hello');
//ix.appendChild(text);
//ex.appendChild(ax);
//ex.insertBefore(dx, ax);
//ex.appendChild(dx);
//ex.removeChild(dx);
//ex.replaceChild(ix, ax);


//function BombKiller(n) {
//    function randomize() {
//        return Math.floor(Math.random() * (n - 1)) + 1;
//    }
//
//    this.start = function () {
//        var code = randomize();
//        var sector = document.getElementsByClassName('sector');
//        sector[--code].nobomb = 1;
//        for (var i = 0; i < sector.length; i++) {
//            sector[i].onclick = function () {
//                var z = i;
//                if (this.nobomb == 1) {
//                    this.style.backgroundColor = 'green';
//                } else {
//                    this.style.backgroundColor = 'red';
//
//                }
//            }
//        }
//    }
//}
//
//
//var Bomb = new BombKiller(4);
//Bomb.start();
//

////function divideZerro(num){
////    if(num===0){
////        throw new Error('Деление на 0');
////    } else{
////        return 5/num;
////    }
////}
////try{
////    console.log(divideZerro(0));
////}
////catch(e){
////    console.warn(e.message);
////}
////
////(function(){
////    var x = function(select){
////        console.log(select);
////    }
//// window.x = x;
////    x('hello');
////});
////var a = 3;
////console.log(window.a);
////window.ex = 35;
////
////var a;
////function startfn(){
////   a = window.open('https://google.com', 'ex', 'width=500, height=500 left=370, right=100');
////}
////function closefn(){
////    a.close();
////}
////var a = setInterval(function(){
////            console.log(new Date())
////    
////},1000);
////clearInterval(a);
////
////var a = setTimeout(function(){
////            console.log(new Date())
////    
////},1000);
////
////
////console.log(ex); // вызов по id
////var a = document.getElementsByClassName('className') // вызов по class
////console.log(a[0]);
////document.getElementsByName('div'); // вызов по tag
////console.log(a);
////
////var ex = document.getElementById('ex');
////ex.style.height = "200px";
////ex.style.width = "500px";
////ex.style.backgroundColor = 'red';
////ex.style.color = 'white';
////console.log(ex);
////
////var btn = document.getElementById('btn');
////btn.onclick = function(){
////    ex.style.backgroundColor = 'green';
////}
////
////btn.onclick = function(){
////    var username = document.getElementById('username').value;
////    ex.innerHTML = 'Hello' + username;
////  
////}
////btn.click = function(){
////    var username = document.getElementById('username').value;
////    var password = document.getElementById('password').value;
////    if(username == 'vasya' && password == '123'){
////        ex.innerHTML = 'ok';
////    }else{
////        ex.innerHTML = 'fail';
////    }
////    }
//

