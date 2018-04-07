// TODO list App
var itemHolder = document.getElementsByClassName("itemHolder");
var list = [];

class TodoItem {
  constructor() {
    this.text = "";
    this.time = "";
  }
}

function addToDom(index, text, date) {
  $(".itemHolder").append("<h2 class='" + index + "'>" + text + "</h2>");
  $(".itemHolder").append("<p class='" + index + "'>" + date + "</p>");
  $(".itemHolder").append(
    "<button class='" +
      index +
      "' onclick='removeItem(" +
      index +
      ")'>Remove</button>"
  );
}

function pushItem() {
  if (document.getElementById("textbox").value != "") {
    let itemQ = new TodoItem();
    itemQ.text = document.getElementById("textbox").value;
    itemQ.time = new Date();
    list.push(itemQ);
    //alert(JSON.stringify(list));
    document.getElementById("textbox").value = "";
    addToDom(list.length - 1, itemQ.text, itemQ.time);
  }
}

function removeItem(num) {
  //get item number from button
  list.splice(num, 1);
  $("." + num).remove();

  //alert(JSON.stringify(list));
}
