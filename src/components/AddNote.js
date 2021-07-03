import "../styles.css";
import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (text.trim().length > 0) {
      handleAddNote(text);
      setText("");
    }
    return;
  };

  return (
    <div className="note new">
      <textarea
        cols="15"
        rows="8"
        placeholder="Type to add a note..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small
          className={
            characterLimit - text.length === 0
              ? "red"
              : characterLimit - text.length <= 30
              ? "orange"
              : null
          }
        >
          {characterLimit - text.length} remaining...
        </small>
        <button className="save" onClick={() => handleSaveClick()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
