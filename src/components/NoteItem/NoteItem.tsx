import { Note } from "../../types/Note";

export function NoteItem({ id, title, content }: Note) {
    return (        
        <div className="bg-reef-gold-600 w-full min-w-10 border border-white rounded-lg my-2">
            <h1>{title}</h1>
            <h3>{id}</h3>
            <p>{content}</p>
        </div>
    );
}