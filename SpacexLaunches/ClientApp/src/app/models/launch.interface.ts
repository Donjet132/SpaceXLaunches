export interface Launch {
  id: string
  name: string;
  date_utc: string;
  details: string;
  success: boolean;
  links: {
    patch: {
      small: string | null;
    };
    webcast: string | null;
  };
  cores:
  {
    core: string;
    flight: number;
    landing_type: string;
    landing_success: boolean;
  }[];
  crew:
  {
    crew: string;
    role: string;
  }[];
  failures:
  {
    time: number;
    altitude: number;
    reason: string;
  }[];
}

export interface LaunchesReponse {
  launches: Launch[];
  totalLaunches: number;
}
