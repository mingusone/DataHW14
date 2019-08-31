// from data.js
var tableData = data;

// YOUR CODE HERE!

var table = d3.select('#ufo-table>tbody')

//draw the table
const drawTable = function(){
	tableData.forEach((sighting) => {
	//Append the row to the table for each sighting
  var row = table.append("tr");

  Object.entries(sighting).forEach(([key, value]) => {
  	//In each row we make a bunch of cells
    var cell = row.append("td");
    //And fill the cell with the text value.
    cell.text(value);
  });
});
};




//Not sure if I need this. maybe for later
var datetime = tableData.map(function(d){
	return d.datetime;
})
	//Assigning dates to table data
table.selectAll("tr").data(datetime);


//Adding the event handler 
var input = d3.select('#datetime');
input.on('change', function(e){
	//Redrawing table because hidden rows can't seem to be searched again
	drawTable();

	var search = input.node().value;

	rows = table.selectAll("tr");
	rows.each(function(d,e,f,g,h,i){
		//Select the row
		row = d3.select(this);
		//Get the date within the row
		var date = row.select("td").text()
		//Compare the two and hide irrelevant rows. Ignore if search box is empty
		if(search.length !== 0){
			date == search ? row.style("visibility", "visible") : row.style("visibility", "collapse");
		}
	});
});

drawTable();
