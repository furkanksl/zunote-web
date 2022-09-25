interface INote {
    createdAt: number;
    noteText: string;
    reminder: string;
    category: string;
}

export default class Note implements INote {
    createdAt: number = 0;
    noteText: string = "";
    reminder: string = "";
    category: string = "";

    constructor(note: INote) {
        this.createdAt = note.createdAt;
        this.noteText = note.noteText;
        this.reminder = note.reminder;
        this.category = note.category;
    }
}
