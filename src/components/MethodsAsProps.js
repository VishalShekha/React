import React from 'react'

function MethodsAsProps(props) {
  return (
    <div>
     <button onClick={ () => props.func('Vishal') }>HI</button> {/* This also shows how to pass arguments back to parent component */}
    </div>
  )
}

export default MethodsAsProps

// When you use arrow function it isn't called when you declare it