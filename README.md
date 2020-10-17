## SeachBar

Work on `SearchBar` component.

You'll need to use `useState`, `useEffect` and `useRef` hooks.

### Iteration 1

Use `search` function, exported from `services/api-client` to search what the user types.

### Iteration 2

To avoid unnecesary requests, trigger the request only if search text has more than 3 chars.

### Iteration 3

To avoid unnecesary requests, trigger the request when user stops typing for 2 seconds.

### Iteration 4

Create your custom hook `useSearch` for all search stuff:

```
const useSearch = () => {
  // ...

  return [value, onChange]
}
```

## Upload image

TODO