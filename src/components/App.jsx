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
	return (
		<div>
			<Header />
			<CreateArea addNote={addNote} />
      {notes.map((note,index) => (<Note key={index} title={note.title} content={note.content} />))}
			<Footer />
		</div>
	);
}

export default App;
