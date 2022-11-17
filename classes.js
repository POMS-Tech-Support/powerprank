var firstCells = document.querySelectorAll('td:nth-child(12)');
var cellValues = [];
firstCells.forEach(function(singleCell) {
 cellValues.push(singleCell.innerText);
});
alert(cellValues.toString());