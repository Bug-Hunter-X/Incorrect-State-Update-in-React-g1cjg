```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly updating state using setCount
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```