## 异步编程 promise,async,await

异步任务会在当前同步任务执行完毕再做触发，

回调函数是基于事件的自动调用函数，其他代码不会等待回调函数，是一种未来会执行的函数，

promise:承诺,promise实际上是一个容器,保存未来才会结束的事件

三种状态：1.进行中Pending，其他代码继续执行 2.兑现Resolved，准备好成功时的处理预案 3. 失败Reject，准备失败方法

async,await是基于promise上的语法糖

1.async标识函数为回调函数，返回的结果是promise对象，

2.await帮助获取promise成功状态的返回值的关键字

右边是普通值，直接返回；右边是promise,返回成功状态的结果 如果失败，await会直接产生异常 await 关键字必须在async修饰的函数中用 await后面的代码等待await执行完毕执行