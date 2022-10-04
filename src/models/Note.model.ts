interface INote {
    id: string;
    createdAt: number;
    noteText: string;
    reminder: number;
    category: string;
    isVoiceNote: boolean;
}

export default class Note implements INote {
    id: string = "";
    createdAt: number = 0;
    noteText: string = "";
    reminder: number = 0;
    category: string = "";
    isVoiceNote: boolean = false;

    constructor(note?: INote, json?: any) {
        if (note !== undefined) {
            this.id = note.id;
            this.createdAt = note.createdAt;
            this.noteText = note.noteText;
            this.reminder = note.reminder;
            this.category = note.category;
            this.isVoiceNote = note.isVoiceNote;
        }

        if (json !== undefined) {
            Object.assign(this, json);
        }
    }
}
