# JS面试题集锦
### 一、基础题目
> #### 1，<!DOCTYPE>的作用是什么？为什么HTML只需要写<!DOCTYPE>
> 难度：*

- <!DOCTYPE>声明位于文档中的最前面的位置，处于html标签之前，声明文档的解析类型(document.compatMode)，避免浏览器的怪异模式
<br/>
- <!DOCTYPE>声明不是一个HTML标签;它是用来告知 Web 浏览器页面使用了哪种 HTML 版本;
<br/>
- 在 HTML 4.01 中，<!DOCTYPE>声明需引用 DTD （文档类型声明），因为 HTML 4.01 是基于 SGML （Standard Generalized Markup Language 标准通用标记语言）。DTD 指定了标记语言的规则，确保了浏览器能够正确的渲染内容；
<br/>
- HTML5 不是基于 SGML，因此不要求引用 DTD；
<br/>
- ‘<!DOCTYPE>’声明没有结束标签，对大小写不敏感。
---

>#### 2，JS中的强制转型指的是什么？
>难度：*

 - 在JavaScript中，两种不同的内置类型间的转换被称为强制转型。强制转型在JavaScript中有两种形式：`显式和隐式`

这是一个`显式`强制转型的例子：
```js
    var a = "42";
    var b = Number( a );
    a; // "42" -- 是个字符串！
    b; // 42 -- 是个数字!
```

这是一个`隐式`强制转型的例子：
```js
    var a = "42";
    var b = a * 1; // "42" 隐式转型成 42 
    a; // "42"
    b; // 42 -- 是个数字!
```
---

> #### 3，JS中的作用域（scope）是指什么？
> 难度：*

- 在 JavaScript 中，每个函数都有自己的作用域。作用域基本上是变量以及如何通过名称访问这些变量的规则的集合。只有函数中的代码才能访问函数作用域内的变量
<br/>
- 同一个作用域中的变量名必须是唯一的。一个作用域可以嵌套在另一个作用域内。如果一个作用域嵌套在另一个作用域内，最内部作用域内的代码可以访问另一个作用域的变量
---

>#### 4，解释JS中的相等性
>难度：*

JavaScript 中有严格比较和类型转换比较：

- `严格比较`（例如 ===）在不允许强制转型的情况下检查两个值是否相等；
<br/>
- `抽象比较`（例如 ==）在允许强制转型的情况下检查两个值是否相等。
```js
var a = "42";
var b = 42;
a == b; // true
a === b; // false，前者是字符串，后者是数值
```

**一些特定的规则：**

- 如果被比较的任何一个值可能是 true 或 false，要用‘===’，而不是‘==’；
- 如果被比较的任何一个值是这些特定值（0、“”或 \[\]），要用 ‘===’，而不是‘==’；
- 在其他情况下，可以安全地使用‘==’。它不仅安全，而且在很多情况下，它可以简化代码，并且提升代码可读性。
---

> #### 5，解释什么是回调函数，并提供一个简单的例子。
>难度: **

- 回调函数是可以作为参数传递给另一个函数的**函数**，并在某些操作完成后执行。下面是一个简单的回调函数示例，这个函数在某些操作完成后打印消息到控制台。

```js
// 定义函数
function modifyArray(arr, callback) {
  arr.push(100);    // 对 arr 做一些操作
  callback();       // 执行传进来的回调函数
}
//执行函数
var arr = [1, 2, 3, 4, 5];
modifyArray(arr, function() {
 console.log("array has been modified", arr);
});
```

---
>#### 6，“use strict”的作用是什么
>难度：**

- “use strict” 出现在 JavaScript 代码的顶部或函数的顶部，可以帮助你写出更安全的 JavaScript 代码。如果你错误地创建了全局变量，它会通过抛出错误的方式来警告你。例如，以下程序将抛出错误:
```js
function doSomething(val) {
 "use strict"; 
 x = val + 10; //变量在创建之前就被赋值
}
```
- 它会抛出一个错误，因为 x 没有被定义，并使用了全局作用域中的某个值对其进行赋值，而 use strict 不允许这样做。下面的小改动修复了这个错误：
```js
function doSomething(val) {
 "use strict"; 
 var x = val + 10; // 利用var关键字进行变量初始化
}
```
---

> #### 7，解释 JavaScript 中的 null 和 undefined
> 难度：**

JavaScript 中有两种底层类型：`null` 和 `undefined`。它们代表了不同的含义：

*   尚未初始化：undefined；
*   空值：null;

null和undefined是两个不同的对象,如下所示:
```js
null == null          // true
null === null         // true
null == undefined     // true
null === undefined    // false
```
---

> #### 8，解释 JavaScript 中的值和类型
> 难度：**

JavaScript提供两种数据类型: `基本数据类型`和`引用数据类型`

**基本数据类型有**：
*   String
*   Number
*   Boolean
*   Null
*   Undefined
*   Symbol

**引用数据类型有**：
*   Object
*   Array
*   Function
---

> #### 9，解释事件冒泡以及如何阻止它？
> 难度：**

解释:
- 事件冒泡是指嵌套最深的元素触发一个事件，然后这个事件顺着嵌套顺序在父元素上触发。
- 防止事件冒泡的一种方法是使用 `event.cancelBubble` 或 `event.stopPropagation()`（低于 IE 9）
---

> #### 10，JS中的let关键字有什么作用？
> 难度：**
- 除了可以在函数级别声明变量之外，ES6 还允许你使用 let 关键字在代码块（{..}）中声明变量
---

> #### 11，什么是IIFE（立即调用函数表达式）？
> 难度：**

它是`立即调用函数表达式`（**Immediately-Invoked Function Expression**），简称 IIFE。函数被创建后立即被执行，在避免污染全局命名空间时经常使用这种模式，因为 IIFE（与任何其他正常函数一样）内部的所有变量在其作用域之外都是不可见的：
```js
( function IIFE () {
 console.log( "Hello!" );
} )( );
// "Hello!"
```
---
> #### 12，如何在JS中比较两个对象？
> 难度：***

- 对于两个非原始值，比如两个对象（包括函数和数组），== 和 === 比较都只是检查它们的引用是否匹配，并不会检查实际引用的内容。
<br/>
- 例如，默认情况下，数组将被强制转型成字符串，并使用逗号将数组的所有元素连接起来。所以，两个具有相同内容的数组进行 == 比较时不会相等：
```js
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
a == c; // true
b == c; // true
a == b; // false
```

对于对象的深度比较，可以使用 deep-equal 这个库，或者自己实现递归比较算法

---
> #### 13，你能解释一下 ES5 和 ES6 之间的区别吗？
> 难度：***

- `ECMAScript 5（ES5）`：ECMAScript 的第 5 版，于 2009 年标准化。这个标准已在所有现代浏览器中完全实现。
- `ECMAScript 6（ES6）`或 `ECMAScript 2015（ES2015）`：第 6 版 ECMAScript，于 2015 年标准化。这个标准已在大多数现代浏览器中部分实现。

以下是 ES5 和 ES6 之间的一些主要区别：

- #### `箭头函数和字符串插值`：
```js
// ES5
const greetings = (name) => {
 return `hello ${name}`;
}
//ES6
const greetings = name => `hello ${name}`;
```
- #### `常量`

常量在很多方面与其他语言中的常量一样，但有一些需要注意的地方。常量表示对值的“固定引用”。因此，在使用常量时，你实际上可以改变变量所引用的对象的属性，但无法改变引用本身
```js
const NAMES = [];
NAMES.push("Jim");
console.log(NAMES.length === 1); // true
NAMES = ["Steve", "John"];       // error
```
- #### `块作用域变量`

新的 ES6 关键字 let 允许开发人员声明块级别作用域的变量。let 不像 var 那样可以进行提升

- #### `默认参数值`

默认参数允许我们使用默认值初始化函数。如果省略或未定义参数，则使用默认值，也就是说 null 是有效值

```js
function multiply (a, b = 2) {
 return a * b;
}
multiply(5); // 10
```
- #### `类定义和继承`

ES6 引入了对类（关键字 class）、构造函数（关键字 constructor）和用于继承的 extend 关键字的支持

- #### `for……of`操作符

`for...of` 语句创建一个循环来迭代可迭代的对象。在 ES6 中引入的 `for...of` 循环，以替代 `for...in` 和 `forEach()` ，并支持新的迭代协议。`for...of` 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。

```js
// 以数组为例
const array1 = ['apple','banana','watermelon'];
for (const x in array1){
  console.log(x )
}

//output
//apple
//banana
//watermelon
//注意：普通对象无法遍历，如:object = {name:'leo',age:'24'};
```

- #### `展开语法`

`展开语法(Spread syntax)`, 可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。(字面量一般指`[1, 2, 3]` 或者`{name: "mdn"}` 这种简洁的构造方式)
```js
function sum(x,y,z){
  return x+y+z
}
const number = [1,2,3]
sum(...number) // 6
```
- #### `promise对象`

promise 提供了一种机制来处理异步操作结果。你可以使用回调来达到同样的目的，但是 promise 通过方法链接和简洁的错误处理带来了更高的可读性

```js
const isGreater = (a, b) => {
            return new Promise((resolve, reject) => {
                if (a > b) {
                    resolve(a)
                } else {
                    reject(b)
                }
            })
        }
isGreater(1, 2)
    .then(result => {
        console.log(result) // 1
    })
    .catch(result => {
        console.log(result) // 2
    })
```
