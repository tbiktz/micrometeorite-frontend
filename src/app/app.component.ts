import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoginService } from './login/Services/login.service';
import { LoadingService } from './shared/Services/loading.service';

@Component({
  selector: 'micro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent  implements OnInit{
  title = 'micrometeorite-frontend';
  loading: boolean = false;
  loggedIn: boolean = false;

  constructor(private loadingService: LoadingService,
    private loginService: LoginService){}

  ngOnInit() {
    this.listenToLoading();
    this.loginService.loginObservable.subscribe(state => this.loggedIn = state);
  }

  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
