var addTwoNumbers = (nums, target) =>{
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        let subVal = target - nums[i];
        if(map.has(subVal)){
            return [map.get(subVal),i];
        }
        map.set(nums[i],i);
    }
}


console.log("...Leetcode #1...");
console.log("Two Sum Problem");
console.log(addTwoNumbers([2,5,3],8));