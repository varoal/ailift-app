import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinishWorkoutService {
  private readonly workoutUrl: string = '';
  constructor(private httpClient: HttpClient) {
    this.workoutUrl = environment.baseUrl + '/api/workouts/finish';
  }

  public __invoke(workoutId: string, data: any): Observable<any> {
    return this.httpClient.post<any>(this.workoutUrl + '/' + workoutId, data);
  }
}
