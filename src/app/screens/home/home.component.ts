import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router
  ) { 
    this.spinner.show()
    
    if ( this.router.url == '/' || this.router.url == '' || this.router.url[1] == '?' )
      return;
    
    window.location.href = `https://dash.visionaio.com${this.router.url}`;
  }

  ngOnInit() {
    this.setMinHeigth()
    window.addEventListener( 'resize', this.setMinHeigth )

  }

  setMinHeigth(){
    let k = window.innerWidth/window.innerHeight;
    if ( k > 2.15 || k < 1.65 )
      document.querySelector('main').classList.add('auto-height');
    else 
      document.querySelector('main').classList.remove('auto-height');
    
    if ( k > 2.15 )
      document.querySelector('header').classList.add('phone-adapt')
    else 
      document.querySelector('header').classList.remove('phone-adapt')
  }

}
