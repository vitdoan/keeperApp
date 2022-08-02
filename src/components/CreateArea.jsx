import React, { useState } from "react";

function CreateArea(props) {
  let [input,setInput] = useState({
    title:"",
    content:""
  })

  function handleInput(event){
    let {value,name} = event.target;
    setInput(prev=>({
      ...prev,
      [name]:value
    }))
  }

	function handleAdd(event) {
    props.addNote(input);
    setInput({title:"",content:""})
    event.preventDefault();
  }

	return (
		<div>
			<form>
				<input
          value={input.title}
					onChange={handleInput}
					name="title"
					placeholder="Title"
				/>
				<textarea
          value={input.content}
					onChange={handleInput}
					name="content"
					placeholder="Take a note..."
					rows="3"
				/>
				<button onClick={handleAdd}>Add</button>
			</form>
		</div>
	);
}

export default CreateArea;
