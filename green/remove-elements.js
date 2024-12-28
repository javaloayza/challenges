/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 Javascript 
 */
nums = [];
val = 0;

var removeElement = function(nums, val) {
let k = 0;;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++
        }
    }
    return k
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));

// Ejemplo 2:

// Entrada: nums = [0,1,2,2,3,0,4,2], val = 2
//  Salida: 5, nums = [0,1,4,0,3,_,_,_]
//  Explicación: Su función debe devolver k = 5, con los primeros cinco elementos de nums conteniendo 0, 0, 1, 3 y 4.
// Tenga en cuenta que los cinco elementos pueden devolverse en cualquier orden.
// No importa lo que dejes más allá de la k devuelta (por eso son guiones bajos).