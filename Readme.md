<h1 align="center">Node JS</h1>

## Important Topics

### Node JS Event Loop

- Think of node js as a process that never stops
- It keeps on running and does job as FIFO
- FIFO (First In First Out)
- And we are keep throwing events to node process

### Node JS Asynchronous Programming

- Asynchronous programming
- node js single threaded non blocking I/O model
- even though it is single threaded - it is efficient
- because it uses non - locking event loop
- and keeps the events in a stack
- they will be executed one by one without waiting for any one of these to complete
- Instead they will be executed and completed as the process is runnning other callbacks

### Callbacks


### Promises

### Streams

### Pipes

### Events

### Module Patterns

### Generators
Generators have become quite famous in Node.js in recent times and that probably because of what they are capable of doing.

Generators are function executions that can be suspended and resumed at a later point.
Generators are useful when carrying out concepts such as 'lazy execution'. This basically means that by suspending execution and resuming at will, we are able to pull values only when we need to.
Generators have the below 2 key methods

- Yield method – The yield method is called in a function to halt the execution of the function at the specific line where the yield method is called.

- Next method – This method is called from the main application to resume the execution of a function which has a yield method. The execution of the function will continue till the next yield method or till the end of the method.

```
function* Add(x) {
   yield x + 1;
   var y = yield(null);
   y = 6
   return x + y;
}

var gen = Add(5);

gen.next();

gen.next(); 
```

### Middleware

### Async/Await


### Axios

### Work Thread

### Others

### 
