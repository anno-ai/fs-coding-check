class Node:
    def __init__(self, target):
        self.object = target
        self.prev_node = None
        self.next_node = None

class Deque:
    def __init__(self):
        self.count = 0
        self.first = None  
        self.last = None
    
    def push_back(self,target):
        raise NotImplementedError("Deque must implement push_back method")
        
        
    def push_front(self,target):
        raise NotImplementedError("Deque must implement push_front method")
        
        
    def pop_back(self):
        last_node =  self.last
        if self.last == self.first:
            self.last = None
            self.first = None
        else:
            self.last = last_node.prev_node
            self.last.next_node = None
        self.count = self.count-1
        
        return last_node.object
    
    def pop_front(self):
        first_node =  self.first
        if self.last == self.first:
            self.last = None
            self.first = None
        else:
            self.first = first_node.next_node
            self.first.prev_node = None
        
        self.count = self.count-1
        return first_node.object
        
    def peek_back(self):
        return self.last.object
    
    def peek_front(self):
        return self.first.object
    
    def __len__(self):
        return self.count
        
if __name__ == "__main__":
    a = "hello_world-1"
    lst = Deque()
    lst.push_back(a)
    print(lst.peek_back())
    print(lst.count)
    print(lst.pop_front())
    print(lst.count)
    b = "hello_world-2"
    lst.push_front(a)
    lst.push_front(b)
    print(lst.peek_front())
    print(lst.peek_back())
    print(lst.count)