export class Option {
    public id: number;
    public word_option: string;
    public correct: boolean;

    constructor(json?) {
        if (json) {
            this.id = json.id;
            this.word_option = json.word_option;
            this.correct = json.correct;
        }
    }
}