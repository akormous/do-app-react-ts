import { useState } from "react";
import { NoteList } from "../NoteList/NoteList";
import { Note } from "../../types/Note";
import { NoteForm } from "../NoteForm.tsx/NoteForm";

// const notesListDemo = [
//   {
//     id: 1,
//     title: "note 1",
//     content: "content 1"
//   },
//   {
//     id: 2,
//     title: "note 2",
//     content: "content 1"
//   },
//   {
//     id: 3,
//     title: "note 3",
//     content: "content 1"
//   },
//   {
//     id: 4,
//     title: "note 4",
//     content: "content 1"
//   },
//   {
//     id: 5,
//     title: "note 5",
//     content: "content 1"
//   },
// ]

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