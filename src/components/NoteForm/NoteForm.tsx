import { FormEvent, useRef, useState } from "react";
import { Note } from "../../types/Note";

export interface NoteFormProps {
    addNotesToList: (note: Note) => void;
}

export function NoteForm({ addNotesToList } : NoteFormProps) {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const idCounter = useRef<number>(0);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        idCounter.current = idCounter.current + 1;
        addNotesToList({ id: idCounter.current, title: title, content: content });
    }

    return (
        <div className="w-full max-w-xl my-2">
            <form className="flex flex-col p-2 items-center" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="title">Title</label>
                <input
                 id="title"
                 type="text"
                 name="title"
                 onChange={(e) => setTitle(e.target.value)}
                 value={title}
                 className="bg-reef-gold-600 w-full rounded-lg p-2 focus:bg-reef-gold-900"
                />

                <label htmlFor="content">Content</label>
                <textarea 
                 id="content"
                 rows={5}
                 name="content"
                 onChange={(e) => setContent(e.target.value)}
                 value={content}
                 className="bg-reef-gold-600 w-full rounded-lg p-2 focus:bg-reef-gold-900"
                />
                <button
                 className="p-2 bg-reef-gold-700 rounded-lg my-2 w-36 hover:bg-reef-gold-900"
                 type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}