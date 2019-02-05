function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 1;

  this.isEmpty = function() {
    if (this.stackControl.length === 0){
      return true;
    }else{
      return false;
    }
  }
  this.push = function(item) {
    var canPush = this.canPush();
    if (canPush){
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      return false;
    }
  }
  this.canPush = function() {
    if (this.stackControl.length >= this.MAX_SIZE){
      return "Stack Overflowss";
    }else{
      return true;
    }
  }
  this.pop = function(item) {
    var test = this.canPop();
    var popper = "";
    if (test){
      popper = this.stackControl.pop(item)
    }else{
      popper = "Stack Underflow"
    }
    return popper
  }
  this.canPop = function() {
    if (this.isEmpty === true){
      return false;
    }else{
      return true;
    }
  }
}
var stack;
stack = new StackDataStructure;

var array = []
array.push(19)
console.log(array.length)

stack.push(19)
console.log(stack.stackControl)
console.log(stack.stackControl.length)

console.log(stack.isEmpty())
stack.push(21)
console.log(stack.stackControl);