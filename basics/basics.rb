# Given a list of numbers nums and a number k, 
# return whether any two numbers from the list add up to k. 
# You may not use the same element twice.

# nums = [35, 8, 18, 3, 22]
# k = 11

class Solution
    def solve(nums, k)
        nums.each do |num|
            if nums.length == 1
                return false
            end
            if nums.include? k - num
                return true
            end
        end
        return false
    end
end
