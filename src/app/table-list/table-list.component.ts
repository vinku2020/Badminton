import { Component, OnInit } from '@angular/core';
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
  public teamProfile: GroupProfile[];

  getuserProfile() {
    return this.restService.get('groupDetails')
    .pipe(
        concatMap((res: any) => res.userDetails),
        map(userDetails => new GroupProfile(userDetails)),
        toArray()
      );
  }

  ngOnInit() {
    this.getuserProfile()
      .subscribe((data) => {
        this.teamProfile = data;
      });
  }
}
