import React, {useState} from 'react';
import './App.css';
import Notes from './Components/Notes'
import NewNote from './Components/NewNote'
import Header from './Components/UI/Header/Header'

const App = () => {

  const DummyArray = [
    {
      id:Math.random().toString(),
      title: 'Start Here!',
      content: 'Click to edit',
      isEditing:false
    },
    {
      id:Math.random().toString(),
      title: 'Start Here!',
      content: 'Click to edit',
      isEditing:false
    }
  ];

  const [notes, setNotes] = useState(DummyArray);

  const addNote = (noteData) => {
    noteData.id=Math.random().toString();
    setNotes((oldnotes) => {
      return [...oldnotes, noteData];
    });
  };

  const refactorNotesArray = (data) => {
    
    setNotes((oldNotes) => {
      const newNotes = [...oldNotes];
      const index = newNotes.findIndex((note) => note.id === data.id);
      newNotes[index] = data;
      console.log(newNotes);
      return newNotes;
    });
  };

  const removeNote = (data) => {
    setNotes((oldNotes) => {
      const newNotes = [...oldNotes];
      const index = newNotes.findIndex((note) => note.id === data.id);
      newNotes.splice(index, 1);
      console.log(newNotes);
      return newNotes;
    });
  }

  return (
    <div className="main-container">
      <Header></Header>
      <NewNote onAddNote={addNote}/>
      <Notes notesArray={notes} onNoteChange={refactorNotesArray} onNoteRemoval={removeNote}/>
    </div>  
  );
};

export default App;
