/**
 * 本模块主要用于记录链表的基本概念及方法
 * @author: LeoLeung
*/

console.log("------------- 链表 start -------------")
var Linkedlist = function () {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    }
    var that = this

    this.head = null;
    this.length = 0;

    /**
     * 从表尾添加元素
     * @param {object} element
     */
    this.append = function (element) {
        var node = new Node(element);
        var current; //当前项

        if (that.length == 0) {
            that.head = node
        } else {
            current = that.head;
            while (current.next) {
                current = current.next; //遍历链表，直到最后一项
            }
            current.next = node;
        }
        that.length++;
    }

    /**
     * 移除指定位置的元素
     * @param {int} position
     */
    this.removeAt = function (position) {
        if (position > -1 && position < that.length) {
            var current = that.head;
            var previous;
            var index = 0;

            if (position == 0) {
                head = current.next;
            } else {
                while (index < position) {
                    // 遍历链表
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next; // 核心！
            }
            that.length--;
            return current.element; // 返回被删除的节点
        } else {
            return null; //越界，不返回被删除的节点
        }
    }

    /**
     * 在特定位置插入元素
     * @param {int} position
     */
    this.insert = function(element,position){
        if (position > -1 && position < that.length){
            var node = new Node(element);
            var current = that.head;
            var previous;
            var index = 0;

            if (position == 0){
                node.next = current;
                that.head = node;
            }else{
                while(index < position){
                    previous = current;
                    current = current.next;
                    index++
                }
                node.next = current;  //插入节点并更新
                previous.next = node; 
            }
            that.length++
        }else{
            return null;
        }
    }

    /**
     * 返回特定元素的位置
     * @param {object} position
     */
    this.indexOf = function(element){
        var current = that.head;
        var index = 0;
        while (current){
            if (current.element === element){
                return index
            }
            current = current.next;
            index++;
        }
        return -1
    }

    /**
     * 打印链表
     */
    this.print = function () {
        var current = that.head;
        var result = [];
        while (current) {
            result.push(current.element);
            current = current.next
        }
        console.log(result.join('->'));
    }
    this.hasCycle = function(){
        var result = [];
        var current = that.head;
        while (current){
            for (let i = 0; i < result.length;i++){
                if (current.element == result[i]){
                    console.log('存在重复');
                    break; //停止循环
                }
            }
            result.push(current.element);
            current = current.next;
        }
        console.log(result);
    };

}

var list = new Linkedlist();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(3);
list.print();
list.removeAt(2);
list.print();
list.insert(3,2);
list.print();
var pos = list.indexOf(3);
console.log(pos);
list.hasCycle();