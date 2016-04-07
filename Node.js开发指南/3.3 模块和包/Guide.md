### Package 包
#### 最好使用CommonJS规范
> Node.js 的包是一个目录,其中包 一个 JSON 格式的包说 文件 package.json。 格符 合 CommonJS 规范的包应该具备以下特 :
>-   package.json    在包的顶层目录下
>-   bin             二进制文件 
>-   lib             JavaScript 代码 
>-   doc             文档 
>-   test            单元测试
> Node.js 对包的要求并没有这么严格,只要顶层目录下有 package.json,并符合一些规范妈可。当然为了提高兼容性,我们还是建议你在制作包的时,严格遵守 CommonJS 规范。


#### 一些默认行为  
-   可以没有 `package.json` 文件或没有 `main` 字段，会默认取 `index.js` 或 `index.node` 作为包的接口

#### package.json 说明
下面是一个完全符合 CommonJS 规范的 package.json 示例:
```
{
    "name": "mypackage",
    "description": "Sample package for CommonJS. This package demonstrates the required elements of a CommonJS package.",
    "version": "0.7.0",
    "keywords": [
        "package",
        "example" 
        ],
    "maintainers": [
       {
          "name": "Bill Smith",
          "email": "bills@example.com",
       }
    ],
    "contributors": [
       {
          "name": "BYVoid",
          "web": "http://www.byvoid.com/"
       }
    ],
    "bugs": {
       "mail": "dev@example.com",
       "web": "http://www.example.com/bugs"
    },
    "licenses": [
        {
           "type": "GPLv2",
           "url": "http://www.example.org/licenses/gpl.html"
        } 
    ],
    "repositories": [
       {
          "type": "git",
          "url": "http://github.com/BYVoid/mypackage.git"
       }
    ],
    "dependencies": {
       "webkit": "1.2",
       "ssl": {
          "gnutls": ["1.0", "2.0"],
          "openssl": "0.9.8"
       }
    } 
}
```