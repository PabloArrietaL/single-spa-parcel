import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { SingleSpaService } from '@core/services/single-spa.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spa-host',
  template: '<div #appContainer></div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaHostComponent implements OnInit {

  constructor(private singleSpaService: SingleSpaService, private route: ActivatedRoute) { }

  @ViewChild('appContainer', { static: true })
  appContainerRef: ElementRef;

  appName: string;

  ngOnInit() {
    this.appName = this.route.snapshot.data.app;
    this.mount().subscribe();
  }

  mount(): Observable<unknown> {
    return this.singleSpaService.mount(this.appName, this.appContainerRef.nativeElement);
  }

  unmount(): Observable<unknown> {
    return this.singleSpaService.unmount(this.appName);
  }
}
