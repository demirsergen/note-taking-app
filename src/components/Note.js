import React from 'react';
import { RiDeleteBin4Fill } from "react-icons/ri";
import '../styles.css';

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <div>
        <p className='text'>{text}</p>
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
