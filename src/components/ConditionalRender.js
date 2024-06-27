import React from 'react'

function ConditionalRender(props) {
  return (
    props.isTrue?(

        <div>
        hi
        </div>
    )
    : 
        <div>
        Hello
        </div>
    
    
)
}

export default ConditionalRender


// Shallow comparation '==='
// Returns true if only the object is same and not the value
// let a = [1,2,3]
// let b = [1,2,3]
// let c = a

/* 
a===b false
a===c true

*/