<h3>Given an object as</h3>

```javascript
const obj = [
  { id: 3, parent: 2 },
  { id: 1, parent: null },
  { id: 2, parent: 1 },
];
```

<h3>Convert to:</h3>

```javascript
const obj = {
  id: 1,
  parent: null,
  child: {
    id: 2,
    parent: 1,
    child: {
      id: 3,
      parent: 2,
    },
  },
};
```

<h3>Solve the problem as</h3>

```javascript
const newObj = obj
  .sort((a, b) => b.parent - a.parent)
  .reduce((acc, cur) =>
    // Recursive first time acc is { id: 3, parent: 2 }, cur is {id: 2, parent: 1}
    // so First recursive result is { id: 2, parent: 1,child: { id: 3, parent: 2 }}

    // Recursive second time acc is { id: 2, parent: 1,child: { id: 3, parent: 2 }}, cur is { id: 1, parent: null },
    // so Second recursion result is {id: 1, parent: null,child:{ id: 2, parent: 1,child: { id: 3, parent: 2 }}
    acc ? { ...cur, child: acc } : cur
  );
```
