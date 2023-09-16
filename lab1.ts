class AudioRecording {
    title: string;
    artist: string;
    duration: number;
  
    constructor(title: string, artist: string, duration: number) {
      this.title = title;
      this.artist = artist;
      this.duration = duration;
    }
  }
  
  class AudioCollection {
    private recordings: AudioRecording[] = [];
  
    add(recording: AudioRecording): void {
      this.recordings.push(recording);
    }
  
    search(query: string): AudioRecording[] {
      return this.recordings.filter(
        (rec) => rec.title.includes(query) || rec.artist.includes(query)
      );
    }
  
    delete(recording: AudioRecording): void {
      this.recordings = this.recordings.filter(
        (rec) => rec !== recording
      );
    }
  }
  
  class AudioCollectionProxy {
    private audioCollection: AudioCollection;
  
    constructor() {
      this.audioCollection = new AudioCollection();
    }
  
    add(recording: AudioRecording): void {
      this.audioCollection.add(recording);
    }
  
    search(query: string): AudioRecording[] {
      return this.audioCollection.search(query);
    }
  
    delete(recording: AudioRecording): void {
      this.audioCollection.delete(recording);
    }
  }

  const audioCollectionProxy = new AudioCollectionProxy();
  audioCollectionProxy.add(new AudioRecording('Song1', 'Artist1', 200));
  audioCollectionProxy.add(new AudioRecording('Song2', 'Artist2', 180));
  console.log(audioCollectionProxy.search('Song1'));
  const recordingToDelete = new AudioRecording('Song1', 'Artist1', 200);
  audioCollectionProxy.delete(recordingToDelete);
  