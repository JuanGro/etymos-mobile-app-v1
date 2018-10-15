import { Etymology } from "./etymology.model";
import { Word } from "./word.model";

export class WordComplete {
    public word: Word;
    public etymologies: Etymology[];

    constructor(json?) {
        this.etymologies = [];
        if (json) {
            this.word = new Word(json)
            for (let etymology of json.etymologies) {
                this.etymologies.push(new Etymology(etymology));
            }
        }
    }
}