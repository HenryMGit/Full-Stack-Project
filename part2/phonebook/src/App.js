import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'
import './index.css'


const App = () => {
  //States
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchTerm, setSearchTerm ] = useState('')
  const [message, setMessage] = useState(null)
  const [msgType, setMsgType] = useState('')

  useEffect( () =>{
    personsService
    .getAll()
    .then( initialPersons => setPersons(initialPersons))
  },[])

  const addName = (event) => {
    event.preventDefault()
    const foundPerson = persons.find(person => person.name === newName)
    if(foundPerson){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        //Updating person's data
        const changedPerson = {...foundPerson, number:newNumber}
        personsService
        .updatePerson(changedPerson)
        .then(updatedPerson => {
          setPersons(persons.map(p => p.name === newName ? updatedPerson : p))
          setNewName('')
          setNewNumber('')
        })
        .catch( error => {
          setMessage(`Information of ${newName} has already been removed from server`)
          setMsgType('fail')
          setNewName('')
          setNewNumber('')
          setTimeout( () => setMessage(null), 5000)
        })
      }
      else
        return 
    }
    else{
      const newNameObj = {name: newName, number: newNumber}
      personsService
      .create(newNameObj)
      .then(returnedPerson =>{
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage(`Added ${returnedPerson.name}`)
        setMsgType('success')
        setTimeout(() => {
          setMessage(null) 
        },5000)
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchTerm = (event) =>{
    setSearchTerm(event.target.value)
  }

  const handleDelete = (id) => {
    if(window.confirm("Do you really want to delete this person")){
      personsService
      .deletePerson(id)
      .then( deletedPerson => {
        setPersons(persons.filter(person =>  person.id !== id))
      })
    }
    else
      return
  }


  const namesToShow = searchTerm === ''
    ? persons:
    persons.filter(person => {
      let name = person.name.toLowerCase()
      return name.indexOf(searchTerm.toLowerCase()) > -1
    })


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} msgType={msgType} />
      <Filter searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange}
                  newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons  persons={namesToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App