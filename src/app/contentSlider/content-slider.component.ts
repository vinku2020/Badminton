import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { GroupProfile } from 'app/model/group.profile.model';
import { TeamProfile } from 'app/model/user.profile.model';
import { RestService } from 'app/services/rest.service';
import { concatMap, map, Subscription, timer, toArray } from 'rxjs';

@Component({
  selector: 'app-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.css']
})
export class ContentSliderComponent implements OnInit {

  constructor(private restService: RestService, elRef: ElementRef, @Inject(DOCUMENT) private document: Document) { 
    this.element = elRef.nativeElement;
  }
  @Input() teamProfile: any;
  @Input() editable = false;
  @Input() group ='default';
  slideIndex: number = 0;
  @ViewChild('groupA') groupA: any;
  @ViewChild('groupB') groupB: any;
  @ViewChild('groupC') groupC: any;
  @ViewChild('groupD') groupD: any;
  element: HTMLElement;
  countDown: Subscription;
  counter = 10;
  tick = 2000;
  


  ngOnDestroy() {
    this.countDown = null;
  }
  ngOnInit() {
    if(this.teamProfile?.groupName) {

    } else {
      this.getuserProfile()
      .subscribe((data) => {
        this.teamProfile = data;
        this.showSlides();
      });
    }
  }

  getuserProfile() {
    return this.restService.get('groupTeams');
  }

  showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      const elementHtml = slides[i] as HTMLElement;
      elementHtml.style.display ='none';
    }
    
    this.slideIndex = this.slideIndex + 1;
    if (this.slideIndex > slides.length) {this.slideIndex = 1}
    const elementHtml = slides[this.slideIndex-1] as HTMLElement;
    elementHtml.style.display = "block";  
    setTimeout(()=>{
      this.showSlides();
    }, 5000);
  }
}
