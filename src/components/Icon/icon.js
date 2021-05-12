import React from 'react'

const Icon = (props) =>{

    return(
        <div>
          <img {...props}/>
        </div>
    )
}

Icon.defaultProps = {
    height: '17px',
    width: '17px'
}

export default Icon;