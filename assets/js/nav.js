function openNav(e) {
    if (window.outerWidth < 600) {
        let nav = e.target.closest('.nav');
        let content = nav.nextElementSibling;
        if (content.style.display === '' || content.style.display === 'none') {
            content.style.display = 'block';
            nav.style.color = ""; //"#746965";
            nav.getElementsByClassName("open")[0].style.display = "none";
            nav.getElementsByClassName("close")[0].style.display = "block";
            let tool = nav.closest('.tool');
            if (tool) {
                tool.style.backgroundColor = "#f8f7f7";
            }
        } else {
            onClose(content, nav);
        }
    }
}

function closeNav(e) {
    if (window.outerWidth < 600) {
        let nav = e.target.closest('.content').previousElementSibling;
        let content = nav.nextElementSibling;
        onClose(content, nav);
    }
}


function onClose(content, nav) {
    content.style.display = "";
    nav.style.borderBottom = "";
    nav.style.color = "";
    nav.getElementsByClassName('open')[0].style.display = "";
    nav.getElementsByClassName('close')[0].style.display = "";
    let tool = nav.closest('.tool');
    if (tool) {
        tool.style.backgroundColor = "white";
    }
}

// FAN

function openFan(event) {
    let section = event.target.closest('.section');
    let description = section.getElementsByClassName('description')[0];
    if (description.style.display === '' || description.style === 'none') {
        description.style.display = 'block';
        section.getElementsByClassName('close')[0].style.display = 'block';
        section.getElementsByClassName('open')[0].style.display = 'none';
    }
    else {
        description.style.display = '';
        section.getElementsByClassName('close')[0].style.display = '';
        section.getElementsByClassName('open')[0].style.display = '';
    }
}


// Carousel 

// Display the selected item
function next(event) {
    let parent = event.target.closest('.carousel');
    let items = parent.getElementsByClassName('item');
    let dots = parent.getElementsByClassName('dot');
    let n = findN(dots, event.target);

    let actives = parent.getElementsByClassName('active');
    while (actives.length) {
        actives[0].classList.remove('active')
    }

    items[n].classList.add('active');
    dots[n].classList.add('active');
}

function findN(list, element) {
    n = 0
    for(let i=0; i<list.length; i++){
        elem = list[i];
        if (elem == element) {
            return i
        }
    }
    return -1
}
