class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for(let i =0; i<nums.length; i++){
            const complement = target - nums[i];
            if(map[complement] != undefined){
                return [map[complement], i];
            }
            else{
                map[nums[i]] = i;
            }
        }
    }
}
