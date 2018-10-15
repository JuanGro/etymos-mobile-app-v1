import { Test } from "./test.model";
import { Option } from "./option.model";
import { Word } from "./word.model";

export class TestComplete extends Test {
    public word: Word;
    public options: Option[];

    constructor(json?) {
        if (json) {
            super(json);
            this.options = [];
            this.word = new Word(json.word)
            for (let option of json.options) {
                this.options.push(new Option(option));
            }
        }
    }
}