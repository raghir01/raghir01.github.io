// from data.js
var tableData = data;
var table = d3.select("#ufo-table");
var tbody = d3.select("tbody");
var fields = ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments'];

function addRows(item) {
  var row = tbody.append("tr");
  for (var i = 0; i < fields.length; i++) {
    row.append("td").text(item[fields[i]]);
  }
//  row.append("td").text(item['datetime']);
//  row.append("td").text(item['city']);
//  row.append("td").text(item['state']);
}

tableData.forEach(addRows);
console.log("done");


function filterData(data, fieldName, fieldValue){
   var filtered = []
   if (fieldValue == null || fieldValue == ''){
        return data
   }
   for(var i=0; i< data.length; i++){
      var item = data[i];
      if(item[fieldName] == fieldValue){
        filtered.push(item);
      }
   }
   return filtered
}


function filterTable(){
    var inputdata = d3.select("#datetime");
    var dt = inputdata.property("value");
    console.log(dt);

    inputdata = d3.select("#city");
    var cityName = inputdata.property("value");
    console.log(cityName);

    inputdata = d3.select("#state");
    var stateName = inputdata.property("value");
    console.log(stateName);

    inputdata = d3.select("#country");
    var countryName = inputdata.property("value");
    console.log(countryName);

    inputdata = d3.select("#shape");
    var shapeName = inputdata.property("value");
    console.log(shapeName);

    var filtered = filterData(data, 'datetime', dt);
    filtered = filterData(filtered, 'city', cityName);
    filtered = filterData(filtered, 'state', stateName);
    filtered = filterData(filtered, 'country', countryName);
    filtered = filterData(filtered, 'shape', shapeName);
    tbody.html("");
    filtered.forEach(addRows)
}

function resetFilter(){
 d3.select("#datetime").property("value", "");
 d3.select("#city").property("value", "");
 d3.select("#state").property("value", "");
 d3.select("#shape").property("value", "");
 d3.select("#datetime").property("value", "");
 filterTable();
}

