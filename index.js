let container = document.getElementById('container');
let grid = document.createElement('div');
let dimension = 16;
let pencilColor = 'rgba(255, 99, 71, 1)'

//console.log(container);
grid.classList.add('grid');
container.appendChild(grid);
//console.log(container.children);
//console.log(grid.classList);


// Drawing function
function draw(e){
    e.target.style.backgroundColor = pencilColor;
}

function createCells(dimension){

    let grid = document.querySelector('.grid');
    let columnArray = []
    for(let j = 0; j< dimension; j ++){
        columnArray[j] = document.createElement('div');
        grid.appendChild(columnArray[j]);
        
        for(let i = 0; i < dimension ; i++){
            let cell = document.createElement('div');
            let styleAttribute = document.createAttribute('style')
            styleAttribute.value = `height:${30/dimension}rem; width:${30/dimension}rem; background-color:white;`
            cell.classList.add('cell');
            cell.setAttributeNode(styleAttribute)
            console.log(cell)
            cell.addEventListener('mouseover',draw)
            console.log(columnArray)
            columnArray[j].appendChild(cell);
    }
}




}

//Reset Grid
function resetgrid(){
    [...document.querySelectorAll('.cell')].forEach(cell => cell.style.backgroundColor = 'white');
};

createCells(dimension);



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