 /** 
 * 本模块主要用于记录栈的基本概念及方法
 * 栈：先进后出（FILO）
 * @author: LeoLeung
 */

 console.log('------------- 栈 start -------------')

 //创建一个类来表示栈
 function Stack(){
     //各种属性和方法的说明
     var item = [];

     //元素入栈
     this.push = function(element){
         item.push(element)
     }

     //元素出栈，并返回该元素
     this.pop = function(){
         return item.pop()
     }

     //返回栈顶的元素，不修改栈
     this.peek = function(){
         return item[item.length - 1];
     }

     //判断栈是否为空
     this.isEmpty = function(){
         return item.length == 0
     }

     //返回栈的长度
     this.size = function(){
         return item.length
     }

     //打印栈元素
     this.print = function(){
         console.log(item);
     }

     //清空栈
     this.clear = function(){
         item = [];
     }
 }

 var stack = new Stack();
 stack.push(5)
 stack.push(8)
 stack.print();
 stack.push(100);
 stack.push(15);
 stack.print();
 console.log(stack.pop())
 console.log(stack.pop())
 stack.print();

 //应用：将十进制的数转二进制
 //原理：整除2取余，逆序排列
 var binaryConverter= function(base){
    let stack = new Stack();
    let rem ;
    let str = '';

    while( base > 0){
        rem = Math.floor(base % 2); //先取余数
        stack.push(rem);
        base = Math.floor(base / 2); //再除以2
    }

    while(stack.size() > 0){
        str += stack.pop();
    }
    return str
 }

 var binaryString = binaryConverter(23);
 console.log(binaryString);

 // 进一步修改，使函数满足十进制转任何进制
 var binaryConverter_upgrade = function(number,base){
    let stack = new Stack();
    let rem ;
    let str = '';
    let digits = '0123456789ABCDEF'; //所以可能出现的余数,字母 [A-F] 代表 [10-16]

    while( number > 0 ){
        rem = Math.floor(number % base); //先取余数
        stack.push(rem);
        number = Math.floor(number / base); //再除以基数
    }

    while(stack.size() > 0){
        str += digits[stack.pop()];
    }
    return str
 }

 var binaryString2 = binaryConverter_upgrade(100345,16);
 console.log(binaryString2);