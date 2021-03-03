import React, { memo,  useEffect } from 'react'
import Item from './Item'

const List = memo(({users, handlerDelete}) => {

    useEffect(() => {
        console.log('List render...')
     })


    return (
        <ul>
            {users.map(user => <Item user={user} key={user.id} handlerDelete={handlerDelete}/>)}
        </ul>
    )
})

export default List