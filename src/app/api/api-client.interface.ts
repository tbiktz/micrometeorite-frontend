/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface APIClientInterface {

  /**
   * Add micrometeorite find
   * Response generated for [ 201 ] HTTP response code.
   */
  addMicrometeoriteFind(
    args: {
      body: models.MicrometeoriteFind,  // MicrometeoriteFind object that needs to be added
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.PredictionResult[]>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getAllMicrometeoriteFinds(
    requestHttpOptions?: HttpOptions
  ): Observable<models.MicrometeoriteFind[]>;

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  deleteMicrometeoriteFind(
    args: {
      micrometeoriteFindId: number,  // micrometeoriteFindId id to delete
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

}
