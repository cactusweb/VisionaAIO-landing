import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  anchors;

  constructor(
  ) { 
    // if ( localStorage.getItem('member') && localStorage.getItem('accessToken') )
    //   this.redirectTo = '/dashboard'
  }

  ngAfterViewInit() {
    this.scroll();
  }
  
  scroll(){

    this.anchors = document.querySelectorAll('nav a[href*="#"]')
    for (let anchor of this.anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
      
        let blockID = anchor.getAttribute('href').substr(1)
      
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
      }
  }

  toDash(){
    window.location.href = 'https://dash.visionaio.com/bind';
  }



  

}
