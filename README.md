# Node.js-Guide
Node.js 学习笔记

### Node.js 是什么
Node.js 不是一种独立的语言,与 PHP、Python、Perl、Ruby 的“即是语言也是平台”不同。Node.js 也不是一个 JavaScript 框架,不同于 CakePHP、Django、Rails。Node.js 更不是浏览器端的库,不能与 jQuery、ExtJS  提并论。Node.js 是一个让 JavaScript 运行在服务端的开发平台,它让 JavaScript 成为脚本语言世界的一等公民,在服务端堪与 PHP、Python、 Perl、Ruby 平起平坐。

### 安装环境（Mac）
利用[Homebrew]()来安装即可。
```
brew install node
```
需要了解一点 `npm`【Node包管理器】 与 `nvm`(`n`)【Node多版本管理器】.

### 玩下Node.js
在命令行中直接输入`node`命令，即可打开`REPL`(`Read-eval-print loop`)。类似于 `python`。
当然也可以使用如下命令玩一下：
```
node -e "console.log('Hello Node.js')"
```

### 基础使用
[Node.js开发指南]()中的所有例子都可以使用 `node` 命令进行测试。   
```
node xx.js
```

### 进阶
-   [模块与包相关](https://github.com/shjborage/Node.js-Guide/blob/master/Node.js%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/3.3%20%E6%A8%A1%E5%9D%97%E5%92%8C%E5%8C%85/Guide.md)
-   Debug技巧
    1. 标准Debug `node debug debug.js` 类似 `gcc` 的Debug，需要执行一些命令，当然这个可以远程
    2. `node-inspector` 安装 `npm install -g node-inspector` 后在 WebKit的浏览器中Debug
    3. IDE，比如WebStorm，非常方便
    
### 核心模块学习
TODO

### Web开发
虽然 `node` 提供了 `http` 的各种底层能力（封装c++），但我们在实际应用过程中也没必要完全自己造轮子。 [Express](https://github.com/shjborage/Node.js-Guide/blob/master/Node.js%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/5%20%E4%BD%BF%E7%94%A8Node.js%E8%BF%9B%E8%A1%8CWeb%E5%BC%80%E5%8F%91/Guide.md)应该是非常合适的选择～

## Books  
-   Node.js 开发指南 [亚马逊链接](http://www.amazon.cn/Node-%E9%83%AD%E5%AE%B6%E5%AE%9D/dp/B00ALPRM3W/ref=sr_1_14?ie=UTF8&qid=1456324247&sr=8-14&keywords=node.js)  [Demo](https://github.com/shjborage/Node.js-Guide/tree/master/Node.js%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97)

