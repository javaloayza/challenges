//test
var majorityElement = function(nums) {
    const hash = {};
    let res = 0;
    let mayor = 0;

    for ( let n of nums) {
        hash[n] = 1 + (hash[n] || 0);
        if (hash[n] > mayor ) {
            res = n;
            mayor = hash[n];
        }
    }
    console.log(hash);
    return res;    
};

console.log(majorityElement([2,2,1,1,1,2,2,3,3]));

