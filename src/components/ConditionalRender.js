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
