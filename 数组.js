 /** 
 * 本模块主要用于记录数组的基本概念及方法
 * @author: LeoLeung
 */

 console.log('------------- 数组 start -------------')

 // 初始化数组
 let arr1 = new Array(1,2,3,4,5,6);
 let arr2 = [4,5,6,7,8,9];

 // 末尾插入元素
 arr1.push(100,101);  //可添加任意数量的元素
 console.log("push():",arr1);

 // 末尾删除元素
 arr1.pop();
 console.log("pop():",arr1);

 // 开头插入元素
 arr1.unshift(-1,0);
 console.log("unshift():",arr1);

 // 开头删除元素
 arr1.shift();
 console.log("shift():",arr1);

 /**
  * 任意位置删除或添加元素
  * param_1:开始的位置（索引值）
  * param_2:需要删除元素的个数
  * param_3 to params_n:插入的元素
  */
 arr1.splice(2,1)
 console.log("splice():",arr1);

 arr1.splice(2,0,2,2.5);
 console.log("splice():",arr1);

 /**
  * 截取数组的某一部分
  * param_1:开始的位置（必选，索引值，可以是负数）
  * param_2:结束的位置（可选，不包括该位置元素）
  */
 let part1 = arr2.slice(2,4);
 console.log("slice():",part1);
 
 // 连接数组
 let arr3 = arr1.concat(arr2);
 console.log("concat():",arr3);

 /**
  * 迭代器函数（可用以代替for循环）
  * every()
  * some()
  * filter()
  * forEach()
  */
 // every():对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true;否则，返回false
 {
     let result = arr2.every(function(item){
         return item >= 6
     })
     console.log("every():",result);
 }

 // some()：对数组中的每一项运行给定函数，如果该函数对任意一项返回true，则返回true；否则，返回false
 {
    let result = arr2.some(function(item){
        return item >= 6
    })
    console.log("some():",result);
 }

 // filter()：对数组中的每一项运行给定函数，该方法回返回满足函数要求的元素组成的数组
 {
     let result = arr3.filter(function(item){
         return item > 5
     })
     console.log("filter():",result);
 }

 // forEach():对数组中的每一项运行给定函数,这个函数没有返回值
 {
     let sum = 0;
     arr3.forEach(function(a){
         sum += a
     })
     console.log("forEach():",sum);
 }
 // 迭代器函数 end

 //将所有数组元素组成字符串
 {
     let result = arr3.join(",");
     console.log("join():",result);
 }

 //返回第一个与给定参数相等的数组元素的索引，没有则返回-1
 {
     let result = arr3.indexOf(100);
     console.log("indexOf():",result);
 }

 //返回最后一个与给定参数相等的数组元素的索引，没有则返回-1
 {
    let result = arr3.lastIndexOf(6);
    console.log("lastIndexOf():",result);
 }

 //对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组,不会改变原数组 (important)
 {
     var sum = 0;
     let result = arr2.map(item => {
         return sum += item
     })
     console.log("map():",result)
 }

 //对数组中的每一项运行给定函数，并将上一次运行的结果作为累加到下一次运算当中 (important)
 /**
  * param_1:previousValue
  * param_2:currentValue
  * param_3:index
  * param_4:array
  */
 {
     let result = arr2.reduce(function(a,b){
         return a+b
     })
     console.log("reduce():",result);
 }

 //颠倒数组中元素的顺序
 {
     let result = arr3.reverse();
     console.log("reverse():",result);
 }
 
 //对数组进行排序，会改变原数组（原地算法），默认顺序是将元素转换成字符串
 //需要注意的是，sort()的性能取决于具体实现，因此无法保证排序的时间和空间复杂性
 {
     let arr1 = [1,11,233,1000,32];
     console.log("sort():",arr1.sort());
     
     let arr2 = [3,23,12,3,44,13323,4]
     let result = arr2.sort(function(a,b){
         return a-b
     })
     console.log("sort():",result);
 }

 // 将数组作为字符串返回，注意与 join() 的不同
 {
     let result = arr3.toString();
     console.log("toString():",result);
 }

 