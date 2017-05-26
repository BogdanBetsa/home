//function divideZerro(num){
//    if(num===0){
//        throw new Error('Деление на 0');
//    } else{
//        return 5/num;
//    }
//}
//try{
//    console.log(divideZerro(0));
//}
//catch(e){
//    console.warn(e.message);
//}
//
//(function(){
//    var x = function(select){
//        console.log(select);
//    }
// window.x = x;
//    x('hello');
//});
//var a = 3;
//console.log(window.a);
//window.ex = 35;
//
//var a;
//function startfn(){
//   a = window.open('https://google.com', 'ex', 'width=500, height=500 left=370, right=100');
//}
//function closefn(){
//    a.close();
//}
//var a = setInterval(function(){
//            console.log(new Date())
//    
//},1000);
//clearInterval(a);
//
//var a = setTimeout(function(){
//            console.log(new Date())
//    
//},1000);
//
//
//console.log(ex); // вызов по id
//var a = document.getElementsByClassName('className') // вызов по class
//console.log(a[0]);
//document.getElementsByName('div'); // вызов по tag
//console.log(a);
//
//var ex = document.getElementById('ex');
//ex.style.height = "200px";
//ex.style.width = "500px";
//ex.style.backgroundColor = 'red';
//ex.style.color = 'white';
//console.log(ex);
//
//var btn = document.getElementById('btn');
//btn.onclick = function(){
//    ex.style.backgroundColor = 'green';
//}
//
//btn.onclick = function(){
//    var username = document.getElementById('username').value;
//    ex.innerHTML = 'Hello' + username;
//  
//}
//btn.click = function(){
//    var username = document.getElementById('username').value;
//    var password = document.getElementById('password').value;
//    if(username == 'vasya' && password == '123'){
//        ex.innerHTML = 'ok';
//    }else{
//        ex.innerHTML = 'fail';
//    }
//    }


function BombKiller(n) {
    function randomize(){
        return Math.floor(Math.random() * (n - 1)) + 1;
    }

this.start = function () {
    var code = randomize();
    var sector = document.getElementsByClassName('sector');
    sector[--code].nobomb = 1;
    for (var i = 0; i < sector.length; i++) {
        sector[i].onclick = function () {
            var z = i;
            if (this.nobomb == 1) {
                this.style.backgroundColor = 'green';
            }else {
                    this.style.backgroundColor = 'red';

                }
            }
        }
    }
}


var Bomb = new BombKiller(4);
Bomb.start();




















