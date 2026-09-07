class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let lowestPrice = Infinity;
       let max = 0;
        for(let i = 0; i<prices.length; i++){
            if(prices[i] < lowestPrice){
                lowestPrice = prices[i];
            }
            else{
               let maxProfit = prices[i] - lowestPrice;
                if(maxProfit > max){
                    max = maxProfit;
                }
            }
        }
        return max;
    }

}
