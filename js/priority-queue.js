priorityQueue = [];

// priorityQueue is FIFO priorityQueue

priorityQueue.unshift('Gabriel');
priorityQueue.unshift('James');
priorityQueue.unshift('John');
priorityQueue.unshift('Alexander');
priorityQueue.unshift('Mitrovic');

const reverserArray = priorityQueue.reverse();
console.log(reverserArray);

while (priorityQueue.length > 0) {
  console.log(priorityQueue.pop());
}
