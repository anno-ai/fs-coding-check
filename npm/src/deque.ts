class Node<T> {
  public object: T;
  public prevNode: Node<T> | null = null;
  public nextNode: Node<T> | null = null;

  constructor(target: T) {
    this.object = target;
  }
}

export class Deque<T> {
  private count = 0;
  private first: Node<T> | null = null;
  private last: Node<T> | null = null;

  pushBack(target: T): void {
    const newNode = new Node(target);
    const lastNode = this.last;

    if (lastNode !== null) {
      lastNode.nextNode = newNode;
      newNode.prevNode = lastNode;
    } else {
      this.first = newNode;
    }

    this.last = newNode;
    this.count += 1;
  }

  pushFront(target: T): void {
    const newNode = new Node(target);
    const firstNode = this.first;

    if (firstNode !== null) {
      firstNode.prevNode = newNode;
      newNode.nextNode = firstNode;
    } else {
      this.last = newNode;
    }

    this.first = newNode;
    this.count += 1;
  }

  popBack(): T {
    if (this.last === null) {
      throw new Error("Deque is empty");
    }

    const lastNode = this.last;

    if (this.last === this.first) {
      this.last = null;
      this.first = null;
    } else {
      this.last = lastNode.prevNode;
      if (this.last !== null) {
        this.last.nextNode = null;
      }
    }

    this.count -= 1;
    return lastNode.object;
  }

  popFront(): T {
    if (this.first === null) {
      throw new Error("Deque is empty");
    }

    const firstNode = this.first;

    if (this.last === this.first) {
      this.last = null;
      this.first = null;
    } else {
      this.first = firstNode.nextNode;
      if (this.first !== null) {
        this.first.prevNode = null;
      }
    }

    this.count -= 1;
    return firstNode.object;
  }

  peekBack(): T {
    if (this.last === null) {
      throw new Error("Deque is empty");
    }
    return this.last.object;
  }

  peekFront(): T {
    if (this.first === null) {
      throw new Error("Deque is empty");
    }
    return this.first.object;
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }
}
