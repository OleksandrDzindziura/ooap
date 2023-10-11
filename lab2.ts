class AudioRecording {
    title: string;
    artist: string;
    duration: number; 

    constructor(title: string, artist: string, duration: number) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }

    getInfo(): string {
        return `${this.title} by ${this.artist} - ${this.duration} seconds`;
    }
}

class AudioCollection {
    private recordings: AudioRecording[] = [];

    add(recording: AudioRecording): void {
        this.recordings.push(recording);
    }

    delete(title: string): boolean {
        const index = this.recordings.findIndex(r => r.title === title);
        if (index > -1) {
            this.recordings.splice(index, 1);
            return true;
        }
        return false;
    }

    search(query: string): AudioRecording[] {
        return this.recordings.filter(
            r => r.title.includes(query) || r.artist.includes(query)
        );
    }

    getRecordingByIndex(index: number): AudioRecording | null {
        if (index >= 0 && index < this.recordings.length) {
            return this.recordings[index];
        }
        return null;
    }

    listAll(): void {
        this.recordings.forEach(r => {
            console.log(r.getInfo());
        });
    }
}

const collection = new AudioCollection();
const song1 = new AudioRecording("Song A", "Artist A", 180);
const song2 = new AudioRecording("Song B", "Artist B", 200);

collection.add(song1);
collection.add(song2);

console.log("After adding songs:");
collection.listAll();

console.log("\nSearch for 'Artist A':");
const results = collection.search("Artist A");
results.forEach(r => console.log(r.getInfo()));

console.log("\nDelete 'Song A':");
collection.delete("Song A");
collection.listAll();
