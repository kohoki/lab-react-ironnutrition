import { useState } from 'react'
import DisplayUppercaseName from './DisplayUppercaseName'
import NameInput from './NameInput'
​
const Form = ({ contacts, setContacts }) => {
  const [newName, setNewName] = useState('')
  const [newPopularity, setNewPopularity] = useState(0)
  const [newOscar, setNewOscar] = useState(false)
  const [newEmmy, setNewEmmy] = useState(false)
​
  const handleSubmit = event => {
    event.preventDefault()
    console.log({ newName, newPopularity, newOscar, newEmmy })
    setContacts([
      ...contacts,
      {
        id: 'asdfdfgdr',
        name: newName,
        popularity: newPopularity,
        wonOscar: newOscar,
        wonEmmy: newEmmy,
        pictureUrl: '',
      },
    ])
    setNewName('')
    setNewPopularity(0)
    setNewOscar(false)
    setNewEmmy(false)
  }
​
  return (
    <form onSubmit={handleSubmit}>
      <NameInput newName={newName} setNewName={setNewName} />
      <DisplayUppercaseName name={newName} />
      <label>
        Popularity{' '}
        <input
          type='number'
          value={newPopularity}
          onChange={event => setNewPopularity(parseInt(event.target.value))}
        />
      </label>
      <label>
        Oscar{' '}
        <input
          type='checkbox'
          checked={newOscar}
          onChange={event => setNewOscar(event.target.checked)}
        />
      </label>
      <label>
        Emmy{' '}
        <input
          type='checkbox'
          checked={newEmmy}
          onChange={event => setNewEmmy(event.target.checked)}
        />
      </label>
      <button type='submit'>Add New Contact</button>
    </form>
  )
}
​
export default Form