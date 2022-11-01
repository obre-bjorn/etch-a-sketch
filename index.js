let container = document.getElementById('container');
let grid = document.createElement('div');
let dimension = 16;
let pencilColor = 'rgba(255, 99, 71, 1)';
let gridSelector = document.getElementById('dimension');
let colorSelector = document.getElementById('change-color');

//console.log(container);
grid.classList.add('grid');
container.appendChild(grid);
//console.log(container.children);
//console.log(grid.classList);


// ------> GRID SETTINGS <------------
gridSelector.addEventListener('change',changeGrid);
gridSelector.onmousemove = function(){
    let gridSelectorDisplay = document.getElementById('grid-size');
    gridSelectorDisplay.textContent = `${gridSelector.value} x ${gridSelector.value}`;
}
colorSelector.onchange = function (){
    pencilColor = colorSelector.value;
}

// Drawing function
function draw(e){
    e.target.style.backgroundColor = pencilColor;
}

// function removeAllChildNodes(parent) {
//     while (parent.firstChild) {
//         parent.removeChild(parent.firstChild);
//     }
// }

//Change grid function for input listener.
function changeGrid(e){
    let grid = document.querySelector('.grid');
    let input = e.target;
    let newDimenstion = parseInt(input.value);
    console.log(newDimenstion);
    grid.innerHTML ='';
    createCells(newDimenstion);
};

function createCells(dimension){
    let grid = document.querySelector('.grid');
    let columnArray = []

    for(let j = 0; j< dimension; j ++){

        columnArray[j] = document.createElement('div');
        grid.appendChild(columnArray[j]);

        for(let i = 0; i < dimension ; i++){
            let cell = document.createElement('div');
            let styleAttribute = document.createAttribute('style');
            styleAttribute.value = `height:${30/dimension}rem; width:${30/dimension}rem; background-color:white;`
            cell.classList.add('cell');
            cell.setAttributeNode(styleAttribute);
            cell.addEventListener('mouseover',draw);
            columnArray[j].appendChild(cell);
    }
}




}

//Reset Grid
function resetgrid(){
    [...document.querySelectorAll('.cell')].forEach(cell => cell.style.backgroundColor = 'white');
};

createCells(dimension);





// ------------> GRID SETUP USING FLOAT AND CLEAR <-------------//
// let gridCount = (8 * 8);
// container = document.getElementById('container');

// for(let i=0; i < gridCount; i++){
//     let grid =document.createElement('div');
//     grid.style.backgroundColor = 'yellow';
//     grid.style.width = '30px';
//     grid.style.height = '30px';
//     grid.textContent = i;
//     grid.style.float = 'left';
//     if(i % 8 == 0){
//         grid.style.clear = 'left';
//     }
//     container.appendChild(grid);
// }

//console.log(container.clientWidth);