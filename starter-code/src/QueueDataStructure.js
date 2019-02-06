function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 20;
  this.isEmpty = function () {
    return (this.queueControl.length === 0)
  }
  this.canEnqueue = function () {
    return (this.queueControl.length < this.MAX_SIZE)
  }
  this.enqueue = function (item) {
    if (this.canEnqueue()) this.queueControl.unshift(item)
    return (this.canEnqueue()) ? this.queueControl : "Queue Overflow";
  }
  this.canDequeue = function () {
    return !(this.isEmpty())
  }
  this.dequeue = function (item) {
    return (this.canDequeue()) ? this.queueControl.pop(item) : "Queue Underflow";
  }
}