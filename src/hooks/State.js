import React from 'react'
import { useState } from 'react'

function State() {
    let [count,setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default State
