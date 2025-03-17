事件循环
宏任务(macrotask)：：
script(整体代码)、setTimeout、setInterval、UI 渲染、 I/O、postMessage、 MessageChannel、setImmediate(Node.js 环境)
微任务(microtask)：
Promise、 MutaionObserver、process.nextTick(Node.js环境）
每一次循环都叫作一次tick
执行栈选择最先进入队列的宏任务（script代码）
微任务队列清空
更新render
重复
js单线程代码分为同步代码（立马执行）和异步代码（要等，耗时，将来执行）
同步代码放到执行栈中执行
异步代码放到宿主环境执行（时机到了，放到任务队列，放的是回调函数，在执行栈执行（同步代码执行完））