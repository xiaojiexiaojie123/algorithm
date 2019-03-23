function  DoublyLinkedList (element) {
    var Node = function (element) {
        this.element = element;
        this.prev = null;
        this.next = null;
    }
    var head = null,
        tail = null, // 保存最后一项
        length = 0;
    this.append = function (element) {
        var node = new Node(element);
        if (head == null) {
            head = node;
        } else {

        }
    }
}

