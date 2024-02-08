function defangIPaddr(nums) {
  let defangedAddress = "";
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === ".") {
      defangedAddress += "[.]";
    } else {
      defangedAddress += nums[i];
    }
  }
  return defangedAddress;
}

let ipAddress = "1.1.1.1";
let defangedIP = defangIPaddr(ipAddress);
console.log(defangedIP); // Output: "1[.]1[.]1[.]1"
