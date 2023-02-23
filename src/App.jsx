import React, { useState, useCallback, useMemo } from 'react'
import Button from './components/UI/Button/Button'

import './App.css'
// import DemoOutput from './components/Demo/DemoOutput'
import DemoList from './components/Demo/DemoList'

function App() {
  // const [showParagraph, setShowParagraph] = useState(false)
  // const [allowToggle, setAllowToggle] = useState(false)
  const [listTitle, setListTitle] = useState('My List')

  // const toggleParagraphgHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph(prevShowParagraph => !prevShowParagraph)
  //   }
  // }, [allowToggle])

  // const allowToggleHandler = () => {
  //   setAllowToggle(prevAllowToggle => !prevAllowToggle)
  // }

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title')
  }, [])

  const listItems = useMemo(() => [5,3,1,10,9], [])

  return (
    <div className="app">
      {/* <DemoOutput show={showParagraph}/> */}
      {/* <Button onClick={allowToggleHandler}>{!allowToggle ? 'Allow Toggling' : 'Disable Toggling'}</Button>
      <Button onClick={toggleParagraphgHandler}>Toggle Paragraph</Button> */}
      <DemoList title={listTitle} items = {listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  )
}

export default App
