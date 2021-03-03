import React, { memo, useEffect } from 'react'

const Item = memo(({user, handlerDelete}) => {

    useEffect(() => {
        console.log('Item render...')
     })
    return (
        <li>
            {user.name}
            <button onClick={() => handlerDelete(user.id)}>delete</button>
        </li>
    )
})

export default Item