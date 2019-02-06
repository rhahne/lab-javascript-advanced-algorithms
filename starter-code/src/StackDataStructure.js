function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 20;
  this.isEmpty = function () {
    return (this.stackControl.length === 0)
  }
  this.canPush = function () {
    return (this.stackControl.length < this.MAX_SIZE)
  }
  this.push = function (item) {
    if (this.canPush()) this.stackControl.push(item)
    return (this.canPush()) ? this.stackControl : "Stack Overflow";
  }
  this.canPop = function () {
    return !(this.isEmpty())
  }
  this.pop = function (item) {
    return (this.canPop()) ? this.stackControl.pop(item) : "Stack Underflow";
  }
}