class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rows = Array.from({length:9}, () => new Set());
        const coloumns = Array.from({length: 9}, () => new Set());
        const box = Array.from({length: 9}, () => new Set());

        for(let row = 0; row < 9; row ++){
            for(let col = 0; col < 9; col++){
                const value = board[row][col];


                if(value === "."){
                    continue;
                }

                const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col /3);

                if(rows[row].has(value) || coloumns[col].has(value) || box[boxIndex].has(value)){
                    return false;
                }
                rows[row].add(value);
                coloumns[col].add(value);
                box[boxIndex].add(value);
            }
        }
        return true;
    }
}
