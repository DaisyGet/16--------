const fs = require("fs");
const data = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
let ptr = 0;
const T = parseInt(data[ptr++]);

for (let t = 0; t < T; t++) {
  const n = parseInt(data[ptr++]);
  const k = parseInt(data[ptr++]);
  const s = data[ptr++];

  let ans = 0;
  const half = k / 2;

  for (let i = 0; i <= n - k; i++) {
    let leftSum = 0,
      rightSum = 0;
    for (let j = 0; j < half; j++) {
      leftSum += +s[i + j];
      rightSum += +s[i + half + j];
    }
    if (leftSum === rightSum) ans++;
  }

  console.log(ans);
}
