// Given a singly linked list, return its length.
// The linked list has fields next and val.

// node = 350
// 1


// class LLNode {
//   constructor(val, next=null) {
//     this.val = val
//     this.next = next
//   }
// }

class Solution {
    solve(node) {
        let count = 1
        while (node.next !== null){
            node = node.next
            count++
        }
        return count
    }
}

// Given an integer n, return an array with each number from 1 to n, 
// except if it's a multiple of 3 or has a 3, 6, or 9 in the number, 
// it should be the string "clap".

// n = 16
// ["1", "2", "clap", "4", "5", "clap", "7", "8", "clap", "10", "11", "clap", "clap", "14", "clap", "clap"]

class Solution {
    solve(n) {
        let arr = []
        for(let i = 1; i <= n; i++){
            i = i.toString()
            if ( i%3 === 0 || i.includes(3) || i.includes(6) || i.includes(9) ){
                arr.push("clap")
            } else {
                arr.push(i)
            }
        }
        return arr
    }
}
