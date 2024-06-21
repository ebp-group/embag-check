function toggle_separator() {
    /*if (window.innerWidth <= 1095) {
        document.getElementsByClassName('separator')[0].style.display = 'none';
    }
    else {
        document.getElementsByClassName('separator')[0].style.display = '';
    */
};

function set_svg_size() {
    svg = document.getElementById('Tool').getElementsByTagName('svg')[0];
    if (window.innerWidth > 1250) {
        svg.style.width = '700px';
        svg.style.height = '700px';
    }
    else {
        svg.style.width = (window.innerWidth * (70.0 / 125)) + "px";
        svg.style.height = (window.innerWidth * (70.0 / 125)) + "px";
    }
}

function fillBurgerMenu(){
    let children = document.getElementById('body').children;
    let burgerMenu = document.getElementsByClassName('hamburger')[0];

    let div = document.createElement('div');
    div.className = "menu";

    for (let index = 1; index < children.length; index++) {
        const child = children[index];
        if(child.id){
            let child_div =  document.createElement('a');
            child_div.className = "menu-item";
            child_div.href = "#" + child.id;
            child_div.innerHTML = child.id[0].toUpperCase() + child.id.substr(1);
            div.appendChild(child_div);
        }
    }
    burgerMenu.appendChild(div);
}

window.onresize = function (x) {
    toggle_separator();
   // set_svg_size();
}

window.onclick = function (event) {
    closeDropdown('filter-goal');
    closeDropdown('filter-actor');
    closeHamburger(event);
}

window.onload = function () {
    // carousel config
    let proto_carousel = document.getElementById('carousel-proto');
    let carousel = document.getElementById('carousel');
    // carousel.append(...proto_carousel.childNodes);
    let unique = Array.prototype.slice.call(proto_carousel.childNodes).unique()
    unique.forEach(function(elem){carousel.appendChild(elem)});
    carousel.getElementsByClassName('item')[0].classList.add('active');	
    if(carousel.getElementsByClassName('dot').length > 0){
		carousel.getElementsByClassName('dot')[0].classList.add('active');
	}
    proto_carousel.remove();

    // remove separator
    toggle_separator();

    // fill burger menu
    this.fillBurgerMenu();
	
	//back to top
	let toTop = document.getElementById('toTop');
		
          window.scroll(function () {
			  console.info("toTop");
              if (this.scrollTop() != 0) {
                  toTop.fadeIn();
              } else {
                  toTop.fadeOut();
              }
          });
};



Array.prototype.unique = function () {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;

        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
document.addEventListener("DOMContentLoaded", function(event) { 
    (function(){
		let toTop = document.getElementById('toTop');
		toTop.style.display = "none";
		
          window.onscroll = function () {
              if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                  toTop.style.display = "block";
              } else {
                  toTop.style.display = "none";
              }
          };

      toTop.onclick = function(){
         document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; 
      };

  }());

});