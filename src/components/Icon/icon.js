import React from 'react'

const Icon = (props) =>{

    return(
        <React.Fragment>
          <img {...props} />
        </React.Fragment>
    )
}

Icon.defaultProps = {
    height: '17px',
    width: '17px'
}

export default Icon;