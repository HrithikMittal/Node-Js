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
