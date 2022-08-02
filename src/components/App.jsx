import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [notes,setNotes] = useState([]);
  function addNote(input){
    setNotes(prev=>([...prev,input]));
  }
  function deleteNote(id){
    setNotes(prev=>prev.filter((note,index) => index !== id));
  }
	return (
		<div>
			<Header />
			<CreateArea addNote={addNote} />
      {notes.map((note,index) => (<Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />))}
			<Footer />
		</div>
	);
}

export default App;
