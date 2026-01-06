import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(['Jose', 'Pedro', 'Manuel'])

  const [users, setUsers] = useState([
    { id: 1, name: 'Renan', age: 21 },
    { id: 2, name: 'Joao', age: 23 },
    { id: 3, name: 'Albert', age: 31 }
  ])

  const deleteRandom = () => {
    // sorteia entre 1 e 3
    const randomNumber = Math.floor(Math.random() * 3) + 1

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== randomNumber)
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}

        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender
