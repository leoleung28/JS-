/**
 * 本模块主要用于记录队列的基本概念及方法 {先进先出：FIFO}
 * @author: LeoLeung
*/
console.log("------------- 队列 start -------------")

var Queue = function(){
    var that = this;
    var items = [];

    /**
     * 入队
     * @param {object} element
     */
    this.enqueue = function(element){
        items.push(element);
    }

    /**
     * 出队
     * @param {none}
     */
    this.dequeue = function(){
        items.shift()
    }

    /**
     * 返回第一个元素
     * @param {none}
     */
    this.front = function(){
        return items[0]
    }

    /**
     * 判断队列是否为空
     * @param {none}
     */
    this.empty = function(){
        return items.length == 0
    }

    /**
     * 返回队列长度
     * @param {none}
     */
    this.size = function(){
        return items.length;
    }

    /**
     * 清空队列
     * @param {none}
     */
    this.clear = function(){
        items = []
    }

    /**
     * 输出队列
     * @param {none}
     */
    this.print = function(){
        console.log(items.toString());
    }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
console.log(queue.size());