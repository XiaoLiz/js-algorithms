
## LinkedList类的方法

- push(element)：向链表尾部添加一个新元素。
- insert(element, position)：向链表的特定位置插入一个新元素。
- getElementAt(index)：返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined。

- remove(element)：从链表中移除一个元素。
- indexOf(element)：返回元素在链表中的索引。如果链表中没有该元素则返回-1。
- removeAt(position)：从链表的特定位置移除一个元素。
- isEmpty()：如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。

- size()：返回链表包含的元素个数，与数组的length属性类似。
- toString()：返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。