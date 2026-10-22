class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let longestSequence = 0;

        const set = new Set(nums);

        for(const num of set){
            if(set.has(num - 1)){
                continue;
            }
            let currentNum = num;
            let currentLongest = 1;
            while(set.has(currentNum + 1)){
                currentNum++;
                currentLongest++;
            }

            longestSequence = Math.max(longestSequence, currentLongest);
        }
        return longestSequence;
    }
}
