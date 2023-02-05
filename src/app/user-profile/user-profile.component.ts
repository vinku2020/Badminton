import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamProfile, UserProfile } from 'app/model/user.profile.model';
import { RestService } from 'app/services/rest.service';
import { BehaviorSubject, concatMap, map, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private restService: RestService) { }
  public teamProfile: TeamProfile;
  
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
    this.getuserProfile(event.index +1)
      .pipe()
      .subscribe((data) => {
        this.teamProfile = new TeamProfile(data);
      });
  }
}
