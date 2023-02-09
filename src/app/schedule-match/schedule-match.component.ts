import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupStageFixture } from 'app/model/group.stage.fixture.model';
import { RestService } from 'app/services/rest.service';
import { concatMap, map, toArray } from 'rxjs';

@Component({
  selector: 'app-schedule-match',
  templateUrl: './schedule-match.component.html',
  styleUrls: ['./schedule-match.component.css']
})
export class ScheduleMatchComponent implements OnInit {
  @Input() id;
  @Input()  matchData: any = {};
  // id = this.actRoute.snapshot.params['id'];
 
  constructor(private restService: RestService, public router: Router, public actRoute: ActivatedRoute) { }
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
    ],
    status: "Not scheduled"
  };
  
  groupStageFixture: GroupStageFixture[];
  showDetails = false

  scheduleMatch(fixtureDetails: any) {
    this.matchData.status = "In progress";
    this.restService.put('groupMatchStage/'+this.id,this.matchData).subscribe((data: {}) => {
      this.router.navigate(['/fixtures']);
    });
  }

  ngOnInit() { 
  }

  getGroupLeagueProfile() {
    return this.restService.get('groupMatchStage/'+this.id)
      .subscribe((data) => {
        this.matchData = data;
      });
  }
}
