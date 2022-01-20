import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MicrometeoriteFind } from 'src/app/api/models/micrometeorite-find.model';

@Injectable({
  providedIn: 'root'
})
export class CreateFindingStepperService {
  private micrometeoriteFindAnnouncedSource = new BehaviorSubject<MicrometeoriteFind>({});
  micrometeoriteFindAnnounced$ = this.micrometeoriteFindAnnouncedSource.asObservable();

  announceMicroMeteoriteFind(micrometeoriteFind: MicrometeoriteFind){
    this.micrometeoriteFindAnnouncedSource.next(micrometeoriteFind);
  }
}
