namespace SpacexLaunches.DTOs
{
    public class Launch
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? Date_utc { get; set; }
        public string? Details { get; set; }
        public bool? Success { get; set; }
        public string? Launchpad { get; set; }
        public Links? Links { get; set; }
        public List<Cores>? Cores { get; set; }
        public List<Crews>? Crew { get; set; }
        public List<string>? Ships { get; set; }
        public List<Failure>? Failures { get; set; }
    }

    public class Links
    {
        public Patch? Patch { get; set; }
        public string? Webcast { get; set; }
    }

    public class Patch
    {
        public string? Small { get; set; }
    }

    public class Cores
    {
        public string? Core { get; set; }
        public int? Flight { get; set; }
        public string? Landing_type { get; set; }
        public bool? Landing_success { get; set; }
    }

    public class Crews
    {
        public string? Crew { get; set; }
        public string? Role { get; set; }
    }

    public class Failure
    {
        public int? Time { get; set; }
        public int? Altitude { get; set; }
        public string? Reason { get; set; }
    }

}
