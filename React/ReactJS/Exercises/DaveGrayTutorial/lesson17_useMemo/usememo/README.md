## USE MEMO HOOK:
### Syntax:
```
const memoizedValue = useMemo(() => computeExpensiveValue(param1, param2), [param1, param2])
```
in there:<br>
  + memoizedValue: the value will be memoized
  + () => computeExpensiveValue(param1, param2): a complex calculation function which we want to memoize
  + [param1, param2]: dependencies array