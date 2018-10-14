import { Test } from "./test.model";
import { Option } from "./option.model";
import { Word } from "./word.model";

export class TestComplete {
    public test: Test;
    public word: Word;
    public options: Option[];

    constructor(json?) {
        this.options = [];
        if (json) {
            this.test = new Test(json);
            this.word = new Word(json.word)
            for (let option of json.options) {
                this.options.push(new Option(option));
            }
        }
    }
}