import { Component, OnInit } from '@angular/core';
import { Launch, LaunchesReponse } from '../../models/launch.interface';
import { SpaceXService } from '../../services/space-x.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-past-launch',
  templateUrl: './past-launch.component.html',
  styleUrl: './past-launch.component.css'
})
export class PastLaunchComponent implements OnInit {
  pageSize = 21;
  currentPage = 0;
  launches: Launch[] = [];
  showMoreButton = false;
  isTruncated: { [key: string]: boolean } = {};

  constructor(
    private spaceXService: SpaceXService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getLaunches();
  }

  getLaunches(): void {
    const skip = this.currentPage * this.pageSize;
    this.spinner.show();

    this.spaceXService.getLaunches('past', skip, this.pageSize).subscribe({
      next: (response: LaunchesReponse) => {
        this.launches = [...this.launches, ...response.launches];
        this.showMoreButton = this.launches.length < response.totalLaunches;
      },
      error: (error) => {
        console.error('Error fetching past launches:', error);
      },
      complete: () => {
        this.spinner.hide();
      }
    });
  }

  showMore(): void {
    this.currentPage++;
    this.getLaunches();
  }

  toggleTruncate(launchId: string): void {
    this.isTruncated = { ...this.isTruncated, [launchId]: !this.isTruncated[launchId] };
  }

}
