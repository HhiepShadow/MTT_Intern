# LESSON 16 - USECALLBACK HOOK

The callback hook in React is a powerful tool that allows you to execute a function whenever a specific condition is met. This hook is particularly useful when you need to perform side effects or interact with the DOM within your React components.

## Syntax

The syntax for the callback hook in React is as follows:

```javascript
useCallback(
  () => {
    // Function body
  },
  [dependencies]
);
```