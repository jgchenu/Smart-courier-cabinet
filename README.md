# Smart-courier-cabinet
## 智能快递柜
### 前端使用小程序框架开发
### 后端使用nodejs中的koa2框架进行代码开发，使用Sequelize映射数据库模型；
* > 智能快递柜文件夹里面是小程序文件
* > nodejs-koa2文件里面是后端代码
* > kuaidi.sql 是数据库的建表以及插入相关数据的导出文件，里面已经有部分账号。
##### 此处注明小程序关于全局app.js变量的bug

* > app.js里面的全局变量的值的获取会有bug（小程序本身的问题），在app.js中app.globalData.value的初始值为0，假如我在A页面设置了app.globalData.value的值为1，如果在B页面的顶部设置该页面的全局变量直接用let value=app.globalData.value；你猜一下，value是多少，value是0，而不是1。那么我在方法函数中使用let value=app.globalData.value，那么value是多少，value是1    真是神奇的bug，后面用到的同学需要注意一下，避免踩坑。



