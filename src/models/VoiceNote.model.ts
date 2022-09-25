interface IVoiceNote {
    createdAt: number;
    notes: TimedNote[];
    reminder: string;
    category: string;
    voiceUrl: string;
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
    createdAt: number = 0;
    notes: TimedNote[] = [];
    reminder: string = "";
    category: string = "";
    voiceUrl: string = "";

    constructor(note: IVoiceNote) {
        this.createdAt = note.createdAt;
        this.notes = note.notes;
        this.reminder = note.reminder;
        this.category = note.category;
        this.voiceUrl = note.voiceUrl;
    }
}
