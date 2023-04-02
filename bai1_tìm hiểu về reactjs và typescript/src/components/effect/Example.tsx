import React, { useEffect, useState } from 'react'

export const Example = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Bạn đã click ${count} lần.`;
  })
  return (
    <div>
      <p>Bạn đã click {count} lần.</p>
      <button onClick={() => setCount(count+1)}>Click me!</button>
    </div>
  )
}
