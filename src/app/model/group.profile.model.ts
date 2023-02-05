import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class GroupProfile {
    groupName: string;
    groupDetails: EachProfile[];

    constructor(gateway) {
        this.groupName = gateway.groupName;
        this.groupDetails = gateway.groupTeams.map(eachTeam => new EachProfile(eachTeam));
    }
}

export class EachProfile {
    teamName: string;
    nickName: string;
    played:number;
    won:number;
    lost:number;
    trumpWon:number;
    trumpLost:number;
    totalPoints: number;
    urlLogo: string;
    finalScore: string;

    constructor(profile) {
        this.teamName = profile.teamName;
        this.played = profile.played;
        this.won = profile.won;
        this.lost = profile.lost;
        this.trumpWon = profile.trumpWon;
        this.trumpLost = profile.trumpLost;
        this.totalPoints = profile.totalPoints;
        this.urlLogo = profile.urlLogo;
        this.finalScore = profile.finalScore;
        this.nickName = profile.nickName;
    }

    getForm() {
        return new FormGroup({
            teamName: new FormControl(this.teamName),
            played: new FormControl(this.played),
            won: new FormControl(this.won),
            lost: new FormControl(this.lost),
            trumpWon: new FormControl(this.trumpWon),
            trumpLost: new FormControl(this.trumpLost),
            totalPoints: new FormControl(this.totalPoints),
            urlLogo: new FormControl(this.urlLogo),
            finalScore: new FormControl(this.finalScore),
            nickName: new FormControl(this.nickName)
        });
    }
}