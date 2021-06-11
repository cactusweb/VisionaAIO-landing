import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.css']
})
export class MainBlockComponent implements OnInit, OnDestroy {
  sub;
  

  constructor(
    private spinner: NgxSpinnerService,
  ) { 
  }

  ngOnInit(): void {

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  hideSpinner(){
    this.spinner.hide()
  }

}
