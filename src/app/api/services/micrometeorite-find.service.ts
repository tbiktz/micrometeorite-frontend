/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { MicrometeoriteFind } from '../models/micrometeorite-find';

@Injectable({
  providedIn: 'root',
})
export class MicrometeoriteFindService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllMicrometeoriteFinds
   */
  static readonly GetAllMicrometeoriteFindsPath = '/micrometeoriteFind';

  /**
   * Returns all micrometeorite Findings.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllMicrometeoriteFinds()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMicrometeoriteFinds$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MicrometeoriteFindService.GetAllMicrometeoriteFindsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Returns all micrometeorite Findings.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllMicrometeoriteFinds$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMicrometeoriteFinds(params?: {
  }): Observable<void> {

    return this.getAllMicrometeoriteFinds$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addMicrometeoriteFind
   */
  static readonly AddMicrometeoriteFindPath = '/micrometeoriteFind';

  /**
   * Add micrometeorite find.
   *
   * Add micrometeorite find
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addMicrometeoriteFind()` instead.
   *
   * This method doesn't expect any request body.
   */
  addMicrometeoriteFind$Response(params: {

    /**
     * MicrometeoriteFind object that needs to be added
     */
    body: MicrometeoriteFind;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MicrometeoriteFindService.AddMicrometeoriteFindPath, 'post');
    if (params) {
      rb.body('body', params.body, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Add micrometeorite find.
   *
   * Add micrometeorite find
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addMicrometeoriteFind$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addMicrometeoriteFind(params: {

    /**
     * MicrometeoriteFind object that needs to be added
     */
    body: MicrometeoriteFind;
  }): Observable<void> {

    return this.addMicrometeoriteFind$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
