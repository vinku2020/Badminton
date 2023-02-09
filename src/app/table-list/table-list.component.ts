import { Component, Input, OnInit } from '@angular/core';
import { GroupProfile } from 'app/model/group.profile.model';
import { TeamProfile } from 'app/model/user.profile.model';
import { RestService } from 'app/services/rest.service';
import { concatMap, map, toArray } from 'rxjs';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private restService: RestService) { }
  @Input() teamProfile: any = {};;
  @Input() editable = false;
  @Input() group ='default';


  ngOnInit() {
    if(this.teamProfile?.groupName) {

    } else {
      this.getuserProfile()
      .subscribe((data) => {
        this.teamProfile = data;
      });
    }
  }

  getuserProfile() {
    return this.restService.get('groupTeams');
  }
}
