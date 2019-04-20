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

/**
 * Handler for create
 *  image block object
 * @param {object} data 
 * @param {function} moreHandler 
 */

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

    this.render = function(){
        return this.block;
    }
}

/**
 * Handler for create images manager
 * @param {array} dataImages 
 * @param {string} idName 
 */

function ImageManager (dataImages, idName){

    var container = document.querySelector(idName);

//Handler for render all images on page

    function moreHandler (){
      this.block.classList.add('open');
      this.p.innerHTML = this.data.fullDesc;
    }

    for (var image of dataImages){

        var block = new BuildImageBlock(image, moreHandler);
     
        container.appendChild(block.render());
      
    }
    
}

new ImageManager(images, '#images-list');








