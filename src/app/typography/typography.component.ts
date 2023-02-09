import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GroupStageFixture } from 'app/model/group.stage.fixture.model';
import { IconDetails } from 'app/model/icon.profile.model';
import { RestService } from 'app/services/rest.service';
import { concatMap, map, toArray } from 'rxjs';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor(private restService: RestService, public router: Router) { }

  addNewMatch = true;
  icons: IconDetails;
  iconList = [ {
    name:'Lords of the Strings',
    iconUrl:'./assets/img/logos/logo1.png'
  },
  {
    name:'SPARTANS',
    iconUrl:'./assets/img/logos/logo2.png'
  },
  {
    name:'Smash11',
    iconUrl:'./assets/img/logos/logo3.png'
  },
  {
    name:'V R MASS PP(L)',
    iconUrl:'./assets/img/logos/logo4.png'
  },
  {
    name:'Dare Doubles',
    iconUrl:'./assets/img/logos/logo5.png'
  },
  {
    name:'Shuttlers',
    iconUrl:'./assets/img/logos/logo6.png'
  },
  {
    name:'Hercules',
    iconUrl:'./assets/img/logos/logo7.png'
  },
  {
    name:'BEN -10',
    iconUrl:'./assets/img/logos/logo8.png'
  },
  {
    name:'Smash Wizards',
    iconUrl:'./assets/img/logos/logo9.png'
  },
  {
    name:'Shuttle Masters',
    iconUrl:'./assets/img/logos/logo10.png'
  },
  {
    name:'SwAG Swingers',
    iconUrl:'./assets/img/logos/logo11.png'
  },
  {
    name:'Serves You Right!',
    iconUrl:'./assets/img/logos/logo12.png'
  },
  {
    name:'Shuttle Swaggers',
    iconUrl:'./assets/img/logos/logo13.png'
  },
  {
    name:'Racketeers',
    iconUrl:'./assets/img/logos/logo14.png'
  },
  {
    name:'Shuttle Smashers',
    iconUrl:'./assets/img/logos/logo15.png'
  },
  {
    name:'Hot Shots',
    iconUrl:'./assets/img/logos/logo16.png'
  }
  ]
  groupStageFixture: GroupStageFixture[];
  showDetails = false
  ngOnInit() {
    this.getGroupLeagueProfile()
      .subscribe((data) => {
        this.groupStageFixture = data;
      });
  }

  getGroupLeagueProfile() {
    return this.restService.get('groupMatchStage')
    .pipe(
        concatMap((res: any) => res),
        map(res => new GroupStageFixture(res)),
        toArray()
      );
  }

  showInput(event) {
    this.showDetails = event;     
  }

  hideDetails(){
    this.showDetails = null;  
  }

  getLogo(teamName) {
    let icons = this.iconList.find(o => o.name === teamName)
    return icons.iconUrl;
  }
  scheduleMatch(id) {
    this.router.navigate(['/scheduleMatch/'+id]);
  }

  updateResult(id) {
    this.router.navigate(['/updateResult/'+id]);
  }
}
