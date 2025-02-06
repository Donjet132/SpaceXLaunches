import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch, LaunchesReponse } from '../models/launch.interface';

@Injectable({
  providedIn: 'root'
})

export class SpaceXService {
  private readonly baseUrl = 'https://api.spacexdata.com/v5/launches';

  constructor(private http: HttpClient) { }

  getLaunches(type: 'latest', skip: number, take: number): Observable<Launch>;
  getLaunches(type: 'upcoming' | 'past', skip: number, take: number): Observable<LaunchesReponse>;
  getLaunches(type: 'latest' | 'upcoming' | 'past', skip: number, take: number): Observable<Launch | LaunchesReponse> {
    return this.http.get<Launch | LaunchesReponse>(`/api/spacexlaunches/launches/${type}?skip=${skip}&take=${take}`);
  }
}
