import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class UserProfile {
    userName: string;
    score: number;
    gameLevel: string;
    profileLogo: string;

    constructor(gateway) {
        this.userName = gateway.userName;
        this.score = gateway.score;
        this.gameLevel = gateway.gameLevel;
        this.profileLogo = gateway.profileLogo;
    }

    getForm() {
        return new FormGroup({
            id: new FormControl(this.userName),
            name: new FormControl(this.score),
            description: new FormControl(this.gameLevel),
            profileLogo: new FormControl(this.profileLogo),
        });
    }
}

export class TeamProfile {
    teamProfile: UserProfile[];
    teamName: string;
    constructor(data) {
        this.teamName = data.teamName;
        this.teamProfile = data.userDetails.length ? data.userDetails.map(mapping => new UserProfile(mapping)) : [];
    }

    getForm() {
        return new FormGroup({
            teamProfile: new FormArray(this.teamProfile.map(mapping => mapping.getForm())),
        });
    }
}