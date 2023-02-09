import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class GroupStageFixture {

    id: number;
    matchNumber: string;
    team1: string;
    team2: string;
    score: number;
    groupName: string;
    team1Logo: string;
    team2Logo: string;
    finalScore: string;
    winner; string;
    matchDetails: MatchDetails[];
    status: string;

    constructor(fixture) {
        this.id = fixture.id;
        this.matchNumber = fixture.matchNumber;
        this.team1 = fixture.team1;
        this.team2 = fixture.team2;
        this.team1Logo = fixture.team1Logo;
        this.team2Logo = fixture.team2Logo;
        this.score = fixture.score;
        this.groupName = fixture.groupName;
        this.finalScore = fixture.finalScore;
        this.winner = fixture.winner;
        this.matchDetails = fixture.matchDetails.map(eachGame => new MatchDetails(eachGame));
        this.status = fixture.status;
    }

    // getForm() {
    //     return new FormGroup({
    //         matchNumber: new FormControl(this.matchNumber),
    //         team1: new FormControl(this.team1),
    //         team2: new FormControl(this.team2),
    //         team1Logo: new FormControl(this.team1Logo),
    //         team2Logo: new FormControl(this.team2Logo),
    //         score: new FormControl(this.score),
    //         groupName: new FormControl(this.groupName),
    //         finalScore: new FormControl(this.finalScore),
    //         winner: new FormControl(this.winner),
    //         teamProfile: new FormArray(this.matchDetails.map(mapping => mapping.getForm())),
    //     });
    // }
}

export class MatchDetails {
    category: string;
    team1Players: string;
    team2Players: string;
    team1Score: string;
    team2Score: string;

    constructor(game) {
        this.category = game.category;
        this.team1Players = game.team1Players;
        this.team2Players = game.team2Players;
        this.team1Score = game.team1Score;
        this.team2Score = game.team2Score;
    }

    getForm() {
        return new FormGroup({
            category: new FormControl(this.category),
            team1Players: new FormControl(this.team1Players),
            team2Players: new FormControl(this.team2Players),
            team1Score: new FormControl(this.team1Score),
            team2Score: new FormControl(this.team2Score)
        });
    }
}