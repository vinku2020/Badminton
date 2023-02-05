import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class AllTeamProfile {
    teamName: string;
    score: number;
    groupName: string;
    urlLogo: string;
    finalScore: string;

    constructor(gateway) {
        this.teamName = gateway.teamName;
        this.score = gateway.score;
        this.groupName = gateway.groupName;
        this.urlLogo = gateway.urlLogo;
        this.finalScore = gateway.finalScore;
    }

    getForm() {
        return new FormGroup({
            id: new FormControl(this.teamName),
            name: new FormControl(this.score),
            description: new FormControl(this.groupName),
            urlLogo: new FormControl(this.urlLogo),
            finalScore: new FormControl(this.finalScore)
        });
    }
}