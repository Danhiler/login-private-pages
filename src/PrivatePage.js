import React from 'react'

const PrivatePage = (props) => {
    const {logout}=props
    return (<div>
            This is private Page
            <button onClick={logout}>log Out</button>
        </div>
    )
}
export default PrivatePage