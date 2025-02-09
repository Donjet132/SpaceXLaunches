using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SpacexLaunches.DTOs;

namespace SpacexLaunches.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SpacexLaunchesController : Controller
    {
        [Authorize]
        [HttpGet("launches/{type}")]
        public async Task<IActionResult> Launches(string type, int skip, int take)
        {
            string url = type.ToLower() switch
            {
                "upcoming" => "https://api.spacexdata.com/v5/launches/upcoming",
                "past" => "https://api.spacexdata.com/v5/launches/past",
                "latest" => "https://api.spacexdata.com/v5/launches/latest",
                _ => throw new ArgumentException("Invalid launch type")
            };

            using var httpClient = new HttpClient();

            try
            {
                HttpResponseMessage response = await httpClient.GetAsync(url);
                if (response.IsSuccessStatusCode)
                {
                    string json = await response.Content.ReadAsStringAsync();

                    if(type == "latest")
                    {
                        var launch = JsonConvert.DeserializeObject<Launch>(json);
                        return Ok(launch);
                    }

                    var launchesJson = JsonConvert.DeserializeObject<List<Launch>>(json) ?? new List<Launch>();
                    int totalLaunches = launchesJson.Count;

                    var launches = launchesJson
                        .Skip(skip)
                        .Take(take)
                        .Select(x => new Launch
                        {
                            Id = x.Id,
                            Name = x.Name,
                            Date_utc = x.Date_utc,
                            Details = x.Details,
                            Success = x.Success,
                            Links = new Links { 
                               Patch = x.Links?.Patch,
                               Webcast = x.Links?.Webcast,
                            }
                        }).ToList();

                    return Ok(new { launches, totalLaunches });
                }
                else
                {
                    return StatusCode((int)response.StatusCode, "Error fetching SpaceX data.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

    }
}
