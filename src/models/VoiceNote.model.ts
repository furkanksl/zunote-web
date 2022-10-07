interface IVoiceNote {
    id: string;
    createdAt: number;
    notes: TimedNote[];
    reminder: number;
    category: string;
    voiceUrl: string;
    duration: string;
    isVoiceNote: boolean;
}

interface ITimedNote {
    createdAt: number;
    noteText: string;
    time: string; // minute and second , like 00:34
}

export class TimedNote implements ITimedNote {
    createdAt: number = 0;
    noteText: string = "";
    time: string = "";

    constructor(timedNote: ITimedNote) {
        this.createdAt = timedNote.createdAt;
        this.noteText = timedNote.noteText;
        this.time = timedNote.time;
    }
}

export default class VoiceNote implements IVoiceNote {
    id: string = "";
    createdAt: number = 0;
    notes: TimedNote[] = [];
    reminder: number = 0;
    category: string = "";
    voiceUrl: string = "";
    isVoiceNote = true;
    duration: string = "0";

    constructor(note?: IVoiceNote, json?: any) {
        if (note !== undefined) {
            this.id = note.id;
            this.createdAt = note.createdAt;
            this.notes = note.notes;
            this.reminder = note.reminder;
            this.category = note.category;
            this.voiceUrl = note.voiceUrl;
            this.isVoiceNote = note.isVoiceNote;
            this.duration = note.duration;
        }

        if (json !== undefined) {
            Object.assign(this, json);
        }
    }
}
