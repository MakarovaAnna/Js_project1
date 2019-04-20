// Number
var a = 5;
var b = 5.5;

var res = a + b;

// String
var name = "Vasa";

// Undefined
var c;

// Null
var n = document.getElementById('dddddddddddd');

// Boolean
var bl = 4 > 8;

// Object
var names = ['Vasa', 'Pit', 'Alex', 'An', 'Ylya']

var user = { name:'Pit', age:25 }
console.log(user.name);

// условия
var result = 5;

if (result) {
    alert('Hi')
} else if (result === 3) {
    alert('Hi else')
} else {
    alert('Hi else all')
}

var result = 2;

switch(result){  //только 1 значение можно передать
    case 2 : alert('hi 2')
    break;
    case 5 : alert('hi 5')
    
    default: alert('hi default')
}

// question
var res = prompt('Do you learn JS? yes/no');

if (res === 'yes'){
    alert('It is nice!');
} else if (res === 'no'){
    alert('It is not nice');
} else {
    alert('Enter only yes/no');
}

console.log(res);

// calculate
var num1 = +prompt('Enter num1');
var num2 = +prompt('Enter num2');

var result = num1 + num2;

alert('Sum = ' + result);


// for(var i = 0; i < names.length; i++) {
//      alert(names[i]); }
// 


// for(var i in names) {
//     console.log(names[i]); 
// }

// если захотели что-то добавить
var names = ['Dnepr' , 'Lviv' , 'Kiev'];
var names = ['Dnepr'];
names.push('Kiev');
console.log(names);

// 
var names = [];
var city1 = prompt('Enter city 1');
var city2 = prompt('Enter city 2');
var city3 = prompt('Enter city 3');
names.push(city1, city2, city3);

for(var i in names) {
    console.log(names[i]);
}



var names = [
    'Vasa',
    'Pit',
    'An',
    'Olya',
    'Andrey',
    'Alex',
] //массив

var orders = [
    'order-1',
    'order-2',
    'order-3',
    'order-4',
    'order-5',
    'order-6',
]



function renderList(data, nameId) {
    var html = '';

    for (var name of data) {

        html += '<li>' + name + '</li>';

    } //цикл

    var listNames = document.getElementById(nameId);

    listNames.innerHTML = html  //вывести список на экран

}

renderList(names, 'list'); //вызов функции (массив, строковый ади)

renderList(orders, 'orders'); //вызов функции для массива заказов




function sum (a, b) {  //принять неограниченное количество аргументов и суммировать их
   
    console.log(arguments);
        var res = 0;
        var res = 8;
    
    
        res += b;
        return res;
    
    }
    
    var result = sum(1, 5);
    
    alert(result);

    

    function sum (a, b) {  //принять неограниченное количество аргументов и суммировать их
   
        console.log(arguments);
            var res = 0;
            
            for (var num of arguments) {   //если будет in то попадает индекс, если of то число в массиве
                res += num;    
            }
        
            return res;
        
        }
        
        var result = sum(7, 5, 8, 7);
        
        alert(result);
        



        var dataString = prompt('Enter string numbers with comma')


function sum (str) {  //принять неограниченное количество аргументов и суммировать их
   var ar = str.split(',');

    var res = 0;
    
    for (var num of ar) {   //если будет in то попадает индекс, если of то число в массиве
        res += +num;    
    }
    return res;

}

function validate (string) {     //проверка в отдельной функции всегда
    if(!string) {
        return false;
    }
    return true;
}

if(validate(dataString)) {
    var result = sum(dataString);
    alert ('Your sum is:' + result);
} else {
    alert('Entered valid numbers');
}



function Show (message) {   //(локальные переменные этой функции, работают только внутри функции)
    alert(message)  //show запускает функцию alert
}

Show('Vasa');
Show('Pit');
Show('Ann');


var a = 18;

function Show (message) {   //(локальные переменные этой функции, работают только внутри функции)
   var a = 10;
    function add() {
       var a = 5;
   } 
   add();
}

Show();
console.log(a);



var left = document.getElementById('btn-left');  //доступ к обьекту который содержит кнопку
var right = document.getElementById('btn-right');
var mainBlock = document.getElementById('main');
console.dir(left);\





var slider = {
    left: document.getElementById('btn-left'),
    right: document.getElementById('btn-right'),
    mainBlock: document.getElementById('main'),
    slideLeft: function () {
        this.mainBlock.style = 'background:brown';
    },
    slideRight: function () {
        this.mainBlock.style = 'background:blue';
    }

}



slider.left.onclick = slideLeft;  //рассказали браузеры, что, если пользователь кликнет, то запустить то-то
slider.right.onclick = slideRight;



var user = {
    sex: 'male', 
    name: 'Vasa',
    age: 88,
    show: function () {
        var str = `
        age: ${this.age} name: ${this.name}
        `
        alert(str);
       
    }
}

user.show();



'use strict'

var User = {
    name:'User'
};

var Car = {
    name:'Car'
};

var Show = function (){
    console.log(Show.myName);
}

//Car.myHandler = Show (); //возвращает undefined


var mainBlock = document.getElementById('main');

var MyStyles = {
background: '#000',
changeBackground: function (){
        if(this.style.backgroundColor !== 'yellow'){
            this.style.backgroundColor = 'yellow';
        } else {
            this.style.backgroundColor = 'red';
        }
    }

mainBlock.onclick = MyStyles.changeBackground;



var result = {
    name: nameArg,
    age: ageArg,
    pay: function(){
        alert('hi pay'+ this.name);
    },
    byOrder: function(){
        alert('hi byOrder' + this.name);
    }
}

return result;



'use strict'

var colors1 = ['red', 'blue', 'yellow', 'black'];
var colors2 = ['orange', 'green', 'pink', 'brown'];

function ColorManager(colors, nameId) {
    this.container = document.getElementById(nameId);
    this.btnLeft = this.container.querySelector('.left');
    this.btnRight = this.container.querySelector('.right');
    this.index = 0;
    this.colors = colors;
    this.container.style.backgroundColor = this.colors[0];
    this.setColor = function () {
        var color = this.colors[this.index];
        this.container.style.backgroundColor = color;
    }

    this.btnLeft.onclick = function () {
        this.index--;
        if (this.index < 0) {
            this.index = this.colors.length - 1;
        }
        this.setColor();

    }.bind(this);

    this.btnRight.onclick = function () {
        this.index++;
        if (this.index === this.colors.length) {
            this.index = 0;
        }
        this.setColor();
    }.bind(this);
}

var manager1 = new ColorManager(colors1, 'colors-1');

var manager2 = new ColorManager(colors2, 'colors-2');






//для своей страницы

'use strict'

var sDesc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
var fDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae ipsum illo asperiores incidunt voluptate laudantium, quaerat omnis qui commodi, obcaecati non?Voluptate illo.';


var images = [
    { path: 'img/img-1.jpeg', shortDesc: sDesc, fullDesc: fDesc }, 
    { path: 'img/img-2.jpeg', shortDesc: sDesc, fullDesc: fDesc }, 
    { path: 'img/img-3.jpeg', shortDesc: sDesc, fullDesc: fDesc }, 
    { path: 'img/img-4.jpeg', shortDesc: sDesc, fullDesc: fDesc },
    { path: 'img/img-5.jpeg', shortDesc: sDesc, fullDesc: fDesc },
    { path: 'img/img-6.jpeg', shortDesc: sDesc, fullDesc: fDesc }, 
]


function BuildImageBlock (data, moreHandler){

    var more = moreHandler.bind(this);
    this.data = data;
    this.block = document.createElement('div');
    this.wrap_desc = document.createElement('div');
    this.p = document.createElement('p');
    this.img = document.createElement('img');
    this.btn = document.createElement('button');

    this.btn.innerHTML = 'more ...';
    this.btn.type = 'button';
    this.btn.onclick = more;

    this.img.src = data.path;
    this.p.innerHTML = data.shortDesc;

    this.wrap_desc.className = 'wrap-desc';
    this.wrap_desc.appendChild(this.p);
    this.wrap_desc.appendChild(this.btn);

   
    this.block.appendChild(this.img);
    this.block.appendChild(this.wrap_desc);   
    this.block.className = 'img-block';

    this.render = function (){
        this.wrap;
    }

    this.render = function(){
        return this.block;
    }
}

function ImageManager (dataImages, idName){

    this.container = document.querySelector(idName);

    function moreHandler (){
      this.block.classList.add('open');
      this.p.innerHTML = this.data.fullDesc;
    }

    for (var image of dataImages){

        var block = new BuildImageBlock(image, moreHandler);
     
        container.appendChild(block.render());
      
    }
    
}

new ImageManager(images, '#images-list');//






var div = document.createElement('div');

var body = document.querySelector('body');

console.dir(div);

div.className = 'test';
div.innerHTML = '<p>TEST</p>';
div.style.backgroundColor = 'red';

body.appendChild(div);




this.wrap_desc