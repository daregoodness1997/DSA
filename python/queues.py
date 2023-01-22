from collections import deque
queue = deque([])

queue.append('Gabriel');
queue.append('James');
queue.append('John');
queue.append('Mitrovic');

queue.popleft()


print(queue)