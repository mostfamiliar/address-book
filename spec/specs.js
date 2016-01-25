describe("toDoList", function() {
 it("creates a new list with the given information", function() {
   var newTask = new toDoList("House");
   expect(newTask.category).to.equal("House");
   expect(newTask.items).to.eql([]);
 });
 it("it will return a formatted string with category and item", function() {
     var newList = new toDoList("House");
     var newItem = new toDoItem("Dishes");
     newList.items.push(newItem);
     expect(newList.combinedInfo()).to.equal("House: Dishes");
  });
});
describe('toDoItem', function() {
  it("create a new item", function() {
    var testToDoItem = new toDoItem("Dishes");
    expect(testToDoItem.string).to.equal("Dishes");
  });
});
