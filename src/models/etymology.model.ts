export class Etymology {
    public id: number;
    public pattern: string;
    public meaning_etymology: string;
    public image_etymology: string;

    constructor(json?) {
        if (json) {
            this.id = json.id;
            this.pattern = json.pattern;
            this.meaning_etymology = json.meaning_etymology;
            this.image_etymology = json.image_etymology;
        }
    }
}