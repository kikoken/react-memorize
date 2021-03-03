import React, { useState, useEffect, useMemo, useCallback } from 'react'

import List from './List'

const initialUsers = [
  {id: 1, name: 'Luis'},
  {id: 2, name: 'Esteban'},
  {id: 3, name: 'gabriel'}
]


function App() {
  const [users, setUsers] = useState([...initialUsers])
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('App render....')
  })

  const handlerAdd = () => {
    const newUser = {id: Date.now(), name: text}
    setUsers([...users, newUser])
  }

  const handlerSearch = () => {
    setSearch(text)
  }

  const handlerDelete = useCallback((userId) => {
    setUsers(users.filter(user => user.id !== userId))
  }, [users])

  const filteredUsers = useMemo(() => users.filter(user =>{ 
    console.log('Filter case....')
    return user.name.toLowerCase().includes(search.toLowerCase())
  }), [users, search])

  return (
    <>
    <input
      type='text'
      value={text}
      onChange={e => setText(e.target.value)}
    />
    <button
      onClick={handlerSearch}
    >Search</button>
    <button
      onClick={handlerAdd}
    >Add</button>
      <List users={filteredUsers} handlerDelete={handlerDelete} />
    </>
  );
}

export default App;
