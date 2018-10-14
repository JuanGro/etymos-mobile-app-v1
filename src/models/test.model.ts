export class Test {
    public id: number;
    public phrase: string;

    constructor(json?) {
        if (json) {
            this.id = json.id;
            this.phrase = json.phrase;
        }
    }
}