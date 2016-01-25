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

    var listItem = new toDoItem(inputToDoItem);
    var combinedList = new toDoList(inputCategory);

    combinedList.items.push(listItem);

    $("ul.itemPrintOut").append("<li><input type='checkbox' class='listCheck'>" + " " + combinedList.combinedInfo() + "</input></li>");

  $(".listCheck").click(function() {
      var ifChecked = $("input.listCheck").prop('checked');
      console.log(ifChecked);
      if (ifChecked) {
        $("ul.itemPrintOut").empty();
        $("ul.itemCompleted").append("<li>" + " " + combinedList.combinedInfo() + "</li>");
      }
    });


  });
 });
