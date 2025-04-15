153
就是今天上午写的求旋转数组的最小值的问题
使用二分查找
把mid的元素和最后一位元素对比
如果大于最后一位元素，证明mid在第一段中，要找最小值，应该右
如果小于等于的话，mid在第二段，往左
最后返回left，left指向的就是最小
总感觉边界条件不同于一般二分
/**
- @param {number[]} nums
- @return {number}
*/
var findMin = function(nums) {
    let left = 0
    let right = nums.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]>nums[nums.length-1]){
            left = mid +1
        }
        else{
            right = right-1
        }
    }
    return nums[left]
};