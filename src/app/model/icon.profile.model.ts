import { FormControl, FormGroup } from "@angular/forms";

export class IconDetails {
    name: string;
    iconUrl: string;

    constructor(game) {
        this.name = game.name;
        this.iconUrl = game.iconUrl;
    }

    getForm() {
        return new FormGroup({
            name: new FormControl(this.name),
            iconUrl: new FormControl(this.iconUrl)
        });
    }
}