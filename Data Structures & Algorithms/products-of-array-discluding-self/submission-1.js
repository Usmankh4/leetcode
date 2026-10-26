class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // result = []
        // 1 = 1 * 1
        // [1, ]

        const result = Array(nums.length).fill(1);
        let leftProducts = 1; // we use 1 because there is nothing to the left for nums[0]
        for(let i =0; i< nums.length; i++){
            result[i] = leftProducts;
            leftProducts = leftProducts * nums[i];
        }
        let rightProducts = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            result[i] *= rightProducts;
            rightProducts *= nums[i];
        }
        return result;
    }
}
