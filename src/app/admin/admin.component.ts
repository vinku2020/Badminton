import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamProfile, UserProfile } from 'app/model/user.profile.model';
import { RestService } from 'app/services/rest.service';
import { BehaviorSubject, concatMap, map, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private restService: RestService, public router: Router) { }
  public teamProfile: TeamProfile;
  showUpdateScore: boolean;
  showScheduleMatch = true;
  selctedID: number;
  currentTab: number;
  id: number;
  matchData: any = {};
  loadingComplete = false;
  showErrorMessage = '';
  teamid: number;
  pointsTable: any = {};
  groupName: string;
  editable = true;
  pointsTableDisplay = true;
  ngOnInit() {
    this.getuserProfile(1)
      .pipe()
      .subscribe((data) => {
        this.teamProfile = new TeamProfile(data);
      });
  }

  getuserProfile(id) {
    return this.restService.get('userProfile'+id);
  }

  tabChanged(event) {
    this.id = null;
    if(event.index === 1) {
      this.showUpdateScore = true;
      this.showScheduleMatch = false;
      this.getGroupLeagueProfile();
    }
    if(event.index === 0) {
      this.showScheduleMatch = true;
      this.showUpdateScore = false;
      this.getGroupLeagueProfile();
    }
    this.getuserProfile(event.index +1)
      .pipe()
      .subscribe((data) => {
        this.teamProfile = new TeamProfile(data);
      });
  }

  getGroupLeagueProfile() {
    this.selctedID = this.id;
    this.loadingComplete = false;
    return this.restService.get('groupMatchStage/'+this.id)
      .subscribe((data) => {
        this.loadingComplete = true;
        this.matchData = data;
        if(this.showScheduleMatch) {
          if(this.matchData.status === "Completed")
            this.showErrorMessage = "Completed match can not be rescheduled, if required create a new match";
          else if(this.matchData.status === "In progress")
          this.showErrorMessage = "Match is already in prgoress, can not rescheduled this match";
          else this.showErrorMessage ='';
        } else if(this.showUpdateScore) {
          if(this.matchData.status === "Completed")
            this.showErrorMessage = "Completed match score can not be updated";
          else if(this.matchData.status === "Not scheduled")
          this.showErrorMessage = "Match is not yet scheduled.";
          else this.showErrorMessage ='';
        }
      });
  }

  getGroupTable() {
    this.pointsTableDisplay = false;
    return this.restService.get('groupTeams/'+this.teamid).subscribe((data) => {
      this.pointsTable = data;
      this.pointsTableDisplay = true;
    });
  }

  updateResult(fixtureDetails: any) {
    this.restService.put('groupTeams/'+this.teamid,this.pointsTable).subscribe((data: {}) => {
      this.router.navigate(['/dashboard']);
    });
  }

}
