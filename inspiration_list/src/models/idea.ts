export class Idea {
    done: boolean;
    id: number;

    constructor(public text: string, public comment: string) {
        this.id = Date.now();
        this.done = false;
    }
}