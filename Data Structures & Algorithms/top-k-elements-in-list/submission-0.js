class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {};
        for(const num of nums){
            freq[num] = (freq[num] || 0) + 1;
        }

        const buckets = Array(nums.length + 1).fill(null).map(()  => []);
        for(const numStr in freq){
            const count = freq[numStr];
            buckets[count].push(Number(numStr));
        }
        let result = [];
        for(let count = buckets.length -1; count > 0 && result.length < k; count --){
            for(const num of buckets[count]){
                result.push(num);
                if(result.length === k){
                    break;
                }
            }
        }
        return result;
        }
        
        
    }

