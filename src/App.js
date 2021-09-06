import React, {useState} from 'react';
import './App.css';
import Notes from './Components/Notes'
import Note from './Components/Note/Note';
import Header from './Components/UI/Header/Header'

const App = () => {

  const DummyArray = [
    {
      id:Math.random().toString(),
      title: 'Note1!',
      content: 'Click to edit',
      noteColor: 'beige'
    },
    {
      id:Math.random().toString(),
      title: 'Note2!',
      content: 'Click to edit',
      noteColor: '#eee'
    },
    {
      id:Math.random().toString(),
      title: 'Note3!',
      content: 'Click to edit',
      noteColor: 'white'
    },
    {
      id:Math.random().toString(),
      title: 'Note4!',
      content: 'Click to edit',
      noteColor: 'lightcoral'
    }
  ];

  const isScreenMobileSized = () => {
    return (window.innerWidth <= 768);
  }

  const [notes, setNotes] = useState(DummyArray);
  const [activeNote, setActiveNote] = useState(DummyArray[0]);
  const [isSidebarActive, setSidebarActive] = useState(true);

  const addNote = (noteData) => {
    noteData.id=Math.random().toString();
    setNotes((oldnotes) => {
      return [...oldnotes, noteData];
    });
    setActiveNote(noteData);
  };
  

  const changeActiveNote = (noteData) => {
    setActiveNote({...noteData});
    if (isScreenMobileSized) setSidebarActive(false);
  }

  const saveNoteData = (data) => {
    setNotes((oldNotes) => {
      const newNotes = [...oldNotes];
      const index = newNotes.findIndex((note) => note.id === data.id);
      newNotes[index] = data;
      console.log(newNotes);
      return newNotes;
    });
    
  };

  const removeNote = (id) => {
    setNotes((oldNotes) => {
      const newNotes = [...oldNotes];
      const index = newNotes.findIndex((note) => note.id === id);
      newNotes.splice(index, 1);
      return newNotes;
    });
  }

  const showSidebar = () => {
    setSidebarActive((oldState) => {
      return (oldState === true) ? false : true;
    });
  }

  return (
    <div className="main-container">
      <Header onShowSidebar={showSidebar}/>
      <section className="app-container">
        <Notes 
          notesArray={notes} 
          onNoteAdd={addNote} 
          onNoteChange={changeActiveNote} 
          onNoteRemoval={removeNote}
          activeNoteId={activeNote.id}
          isOpen={isSidebarActive}
          isScreenMobileSized={isScreenMobileSized}
        />
        <Note key={activeNote.id} data={activeNote} onNoteDataSaveRequest={saveNoteData}></Note>
      </section>
      {/* <NewNote onAddNote={addNote}/> */}
    </div>  
  );
};

export default App;
