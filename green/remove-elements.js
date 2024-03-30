/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 Javascript 
 */
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        while(true)
        {
            auto it = find(nums.begin(),nums.end(),val);
            
            if(it != nums.end())
                nums.erase(it);
            else break;
        }
        return nums.size();
    }
};
