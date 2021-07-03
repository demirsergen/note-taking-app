import React from 'react';
import { RiDeleteBin4Fill } from "react-icons/ri";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <div>
        <span>{text}</span>
      </div>
      <div className="note-footer">
        <p>{date}</p>
        <span>
          <RiDeleteBin4Fill
            className="icon"
            onClick={() => handleDeleteNote(id)}
          />
        </span>
      </div>
    </div>
  );
};

export default Note;
