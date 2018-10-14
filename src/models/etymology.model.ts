export class Etymology {
    public id: number;
    public type_etymology: string;
    public language: string;
    public graeco_latin_etymology: string;
    public pattern: string;
    public meaning_etymology: string;
    public image_etymology: string;

    constructor(json?) {
        if (json) {
            this.id = json.id;
            this.type_etymology = json.type_etymology;
            this.language = json.language;
            this.graeco_latin_etymology = json.graeco_latin_etymology;
            this.pattern = json.pattern;
            this.meaning_etymology = json.meaning_etymology;
            this.image_etymology = json.image_etymology;
        }
    }
}