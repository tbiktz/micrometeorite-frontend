/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, APIClient } from './api-client.service';

import * as models from './models';
import * as guards from './guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedAPIClient extends APIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  addMicrometeoriteFind(
    args: {
      body: models.MicrometeoriteFind,  // MicrometeoriteFind object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PredictionResult[]> {
    return super.addMicrometeoriteFind(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isPredictionResult(res) || console.error(`TypeGuard for response 'PredictionResult' caught inconsistency.`, res)));
  }

  getAllMicrometeoriteFinds(
    requestHttpOptions?: HttpOptions
  ): Observable<models.MicrometeoriteFind[]> {
    return super.getAllMicrometeoriteFinds(requestHttpOptions)
      .pipe(tap((res: any) => guards.isMicrometeoriteFind(res) || console.error(`TypeGuard for response 'MicrometeoriteFind' caught inconsistency.`, res)));
  }

  getMicrometeoriteFindById(
    args: {
      micrometeoriteFindId: number,  // micrometeoriteFindId
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.MicrometeoriteFind> {
    return super.getMicrometeoriteFindById(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isMicrometeoriteFind(res) || console.error(`TypeGuard for response 'MicrometeoriteFind' caught inconsistency.`, res)));
  }

}
