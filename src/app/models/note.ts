export class Note {
    id: number;
    title: string;
    file: string;
    line: string;
    description: string;
    status: string;
    time: string;

    constructor(note: Note) {
        this.id = note.id;
        this.title = note.title;
        this.file = note.file;
        this.line = note.line;
        this.description = note.description;
        this.status = note.status;
        this.time = note.time;
    }
}
