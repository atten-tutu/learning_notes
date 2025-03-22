localStorage sessionStorage cookie token的区别，应用场景
Token 
是服务端生成的一串字符串，以作客户端进行请求的一个令牌，当第一次登录后，服务器生成一个 Token 便将此 Token 返回给客户端，以后客户端只需带上这个Token前来请求数据即可，无需再次带上用户名和密码。
Cookie
Cookie 指某些网站为了辨别用户身份而储存在用户本地终端上的数据
sessionStorage
（临时存储）为每一个数据源维持一个存储区域，在浏览器打开期间存在，包括页面重新加载
localStorage
（长期存储）与 sessionStorage 一样，但是浏览器关闭后，数据依然会一直存在 sessionStorage用于临时保存同一窗口(或标签页)的数据，在关闭浏览器或该标签页之后就会删除这些数据。