import { Etymology } from "./etymology.model";
import { Word } from "./word.model";

export class WordComplete extends Word {
    public etymologies: Etymology[];

    constructor(json?) {
        if (json) {
            super(json);
            this.etymologies = [];
            for (let etymology of json.etymologies) {
                this.etymologies.push(new Etymology(etymology));
            }
        }
    }
}