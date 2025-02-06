import { Component, OnInit } from '@angular/core';
import { Launch } from '../../models/launch.interface';
import { SpaceXService } from '../../services/space-x.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-latest-launch',
  templateUrl: './latest-launch.component.html',
  styleUrl: './latest-launch.component.css'
})
export class LatestLaunchComponent implements OnInit {
  launch: Launch | null = null;

  constructor(
    private spaceXService: SpaceXService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getLaunche();
  }

  getLaunche(): void {
    this.spinner.show();
    this.spaceXService.getLaunches('latest', 0 ,0).subscribe({
      next: (data: Launch) => {
        this.launch = data;
      },
      error: (error) => {
        console.error('Error fetching lates launche:', error);
      },
      complete: () => {
        this.spinner.hide();
      }
    });
  }
}
