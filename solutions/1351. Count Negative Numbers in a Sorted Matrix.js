/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let negativeCount = 0;
    for(const arr of grid) {
        for (const item of arr) {
            if(item < 0) negativeCount++;
        }
    }
    
    return negativeCount;
};
