# Given a singly linked list, return its length.
# The linked list has fields next and val.

# node = 350
# 1

# class LLNode:
#     def __init__(self, val, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def solve(self, node):
        count = 1
        while node.next != None:
            node = node.next
            count += 1
        return count