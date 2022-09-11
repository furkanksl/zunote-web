interface IVoiceNote {
    createdAt: string;
    notes: TimedNote[];
    reminder: string;
    category: string;
    voiceUrl: string;
}

interface ITimedNote {
    createdAt: string;
    noteText: string;
    time: string; // minute and second , like 00:34
}

export class TimedNote implements ITimedNote {
    createdAt: string = "";
    noteText: string = "";
    time: string = "";

    constructor(timedNote: ITimedNote) {
        this.createdAt = timedNote.createdAt;
        this.noteText = timedNote.noteText;
        this.time = timedNote.time;
    }
}

export default class VoiceNote implements IVoiceNote {
    createdAt: string = "";
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
