// from data.js
var tableData = data;

// grab reference to table body
var tbody = d3.select("tbody");

//create function to build table
function ufo_table(d) {
    //clear tbody section for any leftover data from previous filter
    tbody.html("");

    //loop through data, append row, and then insert data
    d.forEach((ufo_info) => {
        var row = tbody.append("tr");
        Object.entries(ufo_info).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

//create function to take in user input and filter table
d3.select("#filter-btn").on("click", function(){
    var element = d3.select("#datetime");
    var input = element.property("value");

    var filteredData = tableData.filter(row => row.datetime === input);
    
    ufo_table(filteredData);
})

//initial page load
ufo_table(tableData);