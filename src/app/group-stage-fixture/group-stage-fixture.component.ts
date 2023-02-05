import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GroupStageFixture } from 'app/model/group.stage.fixture.model';
import { RestService } from 'app/services/rest.service';
import { concatMap, map, toArray } from 'rxjs';

@Component({
  selector: 'app-group-stage-fixture',
  templateUrl: './group-stage-fixture.component.html',
  styleUrls: ['./group-stage-fixture.component.css']
})
export class GroupStageFixtureComponent implements OnInit {

  constructor(private restService: RestService, public router: Router) { }
  @Input() fixtureDetails = { 
    matchNumber: '', 
    groupName: '', 
    team1: '', 
    team2: '', 
    score: 'V/S', 
    team1Logo: '', 
    team2Logo: '', 
    winner: '',
    matchDetails:[
      {
        category:'MD',
        team1Players:'',
        team2Players:'',
        team1Score:'',
        team2Score:'',
      },
      {
        category:'MS1',
        team1Players:'',
        team2Players:'',
        team1Score:'',
        team2Score:'',
      },
      {
        category:'MS2',
        team1Players:'',
        team2Players:'',
        team1Score:'',
        team2Score:'',
      },
      {
        category:'WS',
        team1Players:'',
        team2Players:'',
        team1Score:'',
        team2Score:'',
      },
      {
        category:'MD',
        team1Players:'',
        team2Players:'',
        team1Score:'',
        team2Score:'',
      }
    ]
  };
  
  groupStageFixture: GroupStageFixture[];
  showDetails = false

  addEntry(fixtureDetails: any) {
    this.restService.post('groupMatchStage',this.fixtureDetails).subscribe((data: {}) => {
      this.router.navigate(['/fixtures']);
    });
    // this.restApi.createEmployee(this.fixtureDetails).subscribe((data: {}) => {
    //   this.router.navigate(['/fixtures']);
    // });
  }

  ngOnInit() { }
}
