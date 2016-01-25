function toDoList(category) {
  this.category = category;
  this.items = [];
};

function toDoItem(string) {
  this.string = string;
};

toDoList.prototype.combinedInfo = function() {
  var output = this.category + ": ";

  for (var i=0; i < this.items.length; i++){
        var item = this.items[i];
        console.log(item.string);
        output += item.string + " ";
  };
  output = output.slice(0, output.length - 1);  // remove space at end

  return output;
};



$(document).ready(function() {
  $("form#toDoList").submit(function(event) {
    event.preventDefault();
    var inputCategory = $(this).find("input#category").val();
    var inputToDoItem = $(this).find("input#toDoItem").val();

    var listItem = new Item(inputToDoItem);
    var combinedList = new toDoList(inputCategory);

    combinedList.items.push(listItem);

    console.log(combinedList);
    $("ul.itemPrintOut").append("<li>" + combinedList.combinedInfo() + "</li>");

    combinedList.items.forEach(function(listObject){

    });

    // $("ul#itemCompleted").append(combinedList);
    console.log(combinedList);
  });

});
