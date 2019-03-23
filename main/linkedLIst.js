var LinkedList = function () {
	var Node = function (element) {
		this.element = element;
		this.next = null;
	};
	var head = null,
		length = 0;
	this.append = function (element) {
		var node = new Node(element);
		if (head == null) {
			head = node;
		} else {
			var current = head;
			while(current.next) {
				current = current.next;
			}
			current.next = node;
		}
		length++;
	};
	this.insert = function (position, element) {
		var node = new Node(element);
		if (position > -1 && position < length) {
			if (position == 0) {
				node.next = head;
				head = node;
			} else {
				var current = head,
					index = 0;
				while (++index < position) {
					current = current.next;
				}
				node.next = current.next;
				current.next = node;
			}
			length++;
			return true;
		} else {
			return null;
		}
	};
	this.removeAt = function (position) {
		if (position > -1 && position < length) {
			var current = head,
				previous,
				index = 0;
			if (position == 0) {
				head = head.next;
			} else {
				while (index < position) {
					previous = current;
					current = current.next;
					index++;
				}
				previous.next = current.next;
			}
			length--;
			return current.element;
		} else {
			return null;
		}
	};
	this.remove = function (element) {
		var index = this.indexOf(element);
		return this.removeAt(index);
	};
	this.indexOf = function (element) {
		var current = head, index = 0;
		while (current) {
			if (current.element == element) {
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	};
	this.isEmpty = function () {
		return length === 0;
	};
	this.size = function () {
		return length;
	};
	this.getHead = function () {
			return head;
	};
	this.toString = function () {
		var current = head,
			string = '';
		while (current) {
			string += current.element + (current.next ? 'n' : '');
			current = current.next;
		}
		return string;
	};
	this.print = function () {
		if (head == null) {
			return [];
		}
		var current = head, printArr = [];
		while (current) {
			printArr.push(current.element);
			current = current.next;
		}
		return printArr;
	};
}

var linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);
console.log('print:', linkedList.print(), '  size:', linkedList.size());
// console.log(linkedList.getHead());
// console.log(linkedList.toString());
// linkedList.remove(15);
// console.log('indexOf', linkedList.indexOf(15));
// console.log('print', linkedList.print());
// console.log('removeAt', linkedList.removeAt(2));
// console.log('print:', linkedList.print(), '  size:', linkedList.size());
//
// console.log('insert', linkedList.insert(1,25));
// console.log('print:', linkedList.print(), '  size:', linkedList.size())

console.log('remove', linkedList.remove(20));
console.log('print:', linkedList.print(), '  size:', linkedList.size())

console.log('string', linkedList.toString());

