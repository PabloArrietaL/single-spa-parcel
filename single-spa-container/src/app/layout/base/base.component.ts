import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public collapse = 'active';

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('#sidebarCollapse').on('click',  () => {
        $('#sidebar').toggleClass('active');
      });
    });
  }

}
