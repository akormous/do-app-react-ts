import { Note } from "../../types/Note";
import { NoteItem } from "../NoteItem/NoteItem";

export interface NoteListProps {
    notes: Note[];
    setNotesList?: React.Dispatch<React.SetStateAction<Note[]>>;
}

export function NoteList({ notes }: NoteListProps) {


    return (
        <div className="w-full max-w-xl">
            {notes.map((note) => (
                <NoteItem id={note.id} title={note.title} content={note.content} />
            ))}
        </div>
    );
}