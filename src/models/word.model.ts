export class Word {
    public id: number;
    public word_word: string;
    public meaning_word: string;
    public image_word: string;

    constructor(json?) {
        if (json) {
            this.id = json.id;
            this.word_word = json.word_word;
            this.meaning_word = json.meaning_word;
            this.image_word = json.image_word;
        }
    }
}