<h3>Given an Array like[2, 10, 3, 4, 5, 11, 10, 11, 20, 20, 30],Convert it to [[2, 3, 4, 5], [10, 11], [20], [30]]</h3>



```javascript
const a = [2, 10, 3, 4, 5, 11, 10, 11, 20, 20, 30];

function formArray(arr) {
  const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);
  let obj = {}; 
  let result = [];

  sortedArr.forEach((d) => {
    const key = Math.floor(d / 10);

    if (!obj[key]) {
      obj[key] = [];
    }

    obj[key].push(d);// store to hash table
  });

  for (let i in obj) {
    result.push(obj[i]); 
  }

  return result;
}

const x = formArray(a);

console.log(x);
```