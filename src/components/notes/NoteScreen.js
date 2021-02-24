import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="what happend today"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://th.bing.com/th/id/OIP.PaS6tDYRLxDKuOF5sFGQkwHaFb?pid=ImgDet&w=215&h=157&c=7"
            alt="imgen"
          />
        </div>
      </div>
    </div>
  );
};
