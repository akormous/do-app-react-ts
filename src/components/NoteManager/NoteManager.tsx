import { useState } from "react";
import { NoteList } from "../NoteList/NoteList";
import { Note } from "../../types/Note";
import { NoteForm } from "../NoteForm/NoteForm";

export function NoteManager() {
  const [notesList, setNotesList] = useState<Note[]>([]);

  const addNoteToList = (note: Note) => {
    setNotesList([...notesList, note]);
  }

  return (
    <>
    <div className="flex flex-col items-center">
      <NoteForm addNotesToList={addNoteToList} />
      <NoteList notes={notesList} setNotesList={setNotesList} />
    </div>
    </>
  );
}