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
callbacks are the foundation of Node.js. Callbacks give you an interface with which to say, "and when you're done doing that, do all this." This allows you to have as many IO operations as your OS can handle happening at the same time. For example, in a web server with hundreds or thousands of pending requests with multiple blocking queries, performing the blocking queries asynchronously gives you the ability to be able to continue working and not just sit still and wait until the blocking operations come back. This is a major improvement.

The typical convention with asynchronous functions (which almost all of your functions should be):

```
function asyncOperation ( a, b, c, callback ) {
  // ... lots of hard work ...
  if ( /* an error occurs */ ) {
    return callback(new Error("An error has occurred"));
  }
  // ... more work ...
  callback(null, d, e, f);
}

asyncOperation ( params.., function ( err, returnValues.. ) {
  //This code gets run after the async operation gets run
});
```

### Promises
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers to an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise for the value at some point in the future.

In simple words “A promise is a word taken for some action, the other party who gave the promise might fulfill it or deny it”. In the case of fulfilling, the promise gets resolved, and in another case, it gets rejected.

We can create a promise in JavaScript and use it as an upcoming fact to describe few actions. Promises are kind of design patterns to remove the usage of unintuitive callbacks.

```
function main() {
    var initializePromise = initialize();
    initializePromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        return userDetails;
    }, function(err) {
        console.log(err);
    }).then(function(result) {
        // Print the code activity. Prints 110
        console.log(result.public_gists + result.public_repos);
    })
}
```

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
