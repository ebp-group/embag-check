let actors = [];
let goals = [];
let data = [];
let goal_data = [];
let actor_data = [];


function openDropdown(event, dropDownType) {
    event.stopPropagation();
    document
        .getElementById(dropDownType)
        .getElementsByClassName('dropDownList')[0]
        .classList
        .toggle('show');

    // close other dropdown 
    if (dropDownType === "filter-goal") {
        closeDropdown('filter-actor');
    }
    else {
        closeDropdown('filter-goal');
    }
}

function createSelectFilter(attribute) {
    return function selectFilter(event) {
        // get elements
        let dropdown = event.target.closest('.dropDownList')
        let button = dropdown.parentElement.firstElementChild;

        // color selection
        let selection = event.target.closest('.drpdwn-item');
        selection.classList.toggle('selection');

        // get all selected and filter them
        let selections = dropdown.getElementsByClassName('selection');
        goals = []
        for (let k = 0; k < selections.length; k++) {
            node = selections[k];
            let goal = node.getElementsByClassName('item-text')[0].innerHTML;
            goal = goal.replace(/\&amp\;/g, "&");
            goals.push(goal);
        }

        // set checkmark at selection
        let input = selection.getElementsByTagName('input')[0];
        input.checked = selection.classList.contains('selection') ? true : false;

        // filter the data 
        if (attribute === "Primäres Smart City Ziel") {
            let goal_data_1 = filterData(goals, "Primäres Smart City Ziel")
            let goal_data_2 = filterData(goals, "Sekundäres Smart City Ziel")
            let goal_data_3 = filterData(goals, "Tertiäres Smart City Ziel")
            goal_data = goal_data_1.concat(goal_data_2).concat(goal_data_3).unique()
        } else {
            actor_data = filterData(goals, attribute);
        }

        // Replace button name
        joined_goals = goals.join(", ");
        button.firstElementChild.innerHTML = joined_goals.length > 40 ? joined_goals.slice(0, 40) + ".." : joined_goals;

        if (button.firstElementChild.innerHTML === "" && attribute === "Primäres Smart City Ziel") {
            button.firstElementChild.innerHTML = "Wähle ein Ziel aus";
        }
        else if (button.firstElementChild.innerHTML === "") {
            button.firstElementChild.innerHTML = "Wähle einen Akteur aus";
        }

        // Intersection over both sets
        new_data = goal_data.filter(function(n){
            return actor_data.indexOf(n) !== -1
        })

        // replace graphic 
        let tool = document.getElementById("Tool");
        tool.innerHTML = '';
        apply_json(new_data);

    }
}

function filterData(filter, attribute) {
    filter_data = [];
    for (let i = 0; i < filter.length; i++) {
        f = filter[i];
        let selected = data.filter(function (x) {
            return x[attribute].includes(f);
        });
        filter_data = filter_data.concat(selected);
    }
    filter_data = filter_data.unique();
    return filter.length === 0 ? data : filter_data
}

function resetFilter() {
    document.getElementById('filter-goal').firstElementChild.firstElementChild.innerHTML = "Wähle ein Ziel aus";
    document.getElementById('filter-actor').firstElementChild.firstElementChild.innerHTML = "Wähle einen Akteur aus";

    removeSelection(document.getElementById('filter-goal'));
    removeSelection(document.getElementById('filter-actor'));

    let tool = document.getElementById('Tool');
    tool.innerHTML = '';
    actor_data = data;
    goal_data = data;
    apply_json(data);
}

function removeSelection(filter) {
    let drpdwnItem = filter.getElementsByClassName('drpdwn-item');
    for (let i = 0; i < drpdwnItem.length; i++) {
        let item = drpdwnItem[i];
        item.classList.remove('selection')
        item.getElementsByTagName('input')[0].checked = false
    }
}

function closeDropdown(filterid) {
    //if(!event.target.parentElement.matches('#'+ filterid)){
    if (!event.target.closest('#' + filterid)) {
        var dropdown = document.getElementById(filterid).getElementsByClassName('dropDownList')[0]
        dropdown.classList.remove('show')
    }
}

// Append all different options to dropdown list
function append_options(data, attribute, dropDownType) {
    if (attribute === "Primäres Smart City Ziel") {
        let p_ziele_1 = data.map(function (x) { return x["Primäres Smart City Ziel"] });
        let p_ziele_2 = data.map(function (x) { return x["Sekundäres Smart City Ziel"] });
        let p_ziele_3 = data.map(function (x) { return x["Tertiäres Smart City Ziel"] });
        primaere_ziele = p_ziele_1.concat(p_ziele_2).concat(p_ziele_3).unique();
        let index = primaere_ziele.indexOf("");
        if (index > -1) {
            primaere_ziele.splice(index, 1);
        }
    }
    else {
        // get all goals
        primaere_ziele = data.map(function (x) { return x[attribute] });
    }
    // split multiple goals
    primaere_ziele = primaere_ziele.map(function (x) { return x.split(/^[\-], /) });
    // flatten the multidimensional array
    primaere_ziele = primaere_ziele.reduce(function (acc, val) { return acc.concat(val) }, []);
    // filter for unique values
    primaere_ziele = primaere_ziele.unique();

    // add options to dropdown list
    const filter_drpdwn = document.getElementById(dropDownType).getElementsByClassName('dropDownList')[0];
    for (let i = 0; i < primaere_ziele.length; i++) {
        goal = primaere_ziele[i];
        let div = document.createElement("div");
        div.classList.add('drpdwn-item');
        div.innerHTML = '<input type="checkbox" > <div class="item-text">' + goal + "</div>";
        div.onclick = createSelectFilter(attribute);
        filter_drpdwn.appendChild(div);
    }
}

