import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import Mate from './types'

const INITIAL_STATE = [{
  name: '',
  birthday: '',
  avatar: '',
  description: ''
}]

interface AppState {
  mates: Array<Mate>
  newMatesNumber: number
}

function App() {
  const [mates, setMates] = useState<AppState["mates"]>([])
  // const [newMatesNumber, setNewsMatesNumber] = useState<AppState["newMatesNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMates(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub : Mate): void => {
    setMates(mates => [...mates, newSub] )
  }


  return (
    <>
    <div className="App" ref={divRef}>
      <h1>Birthdays</h1>
      <List mates={mates} />
    </div>
    <Form onNewMate={handleNewSub}/>
    </>
  );
}

export default App;
