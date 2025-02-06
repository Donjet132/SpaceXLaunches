using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace SpacexLaunches.Models
{
    public class User
    {
        public int Id { get; set; }

        public required string Name { get; set; }

        public string? LastName { get; set; }

        public required string Email { get; set; }

        public required string Password { get; set; }

        public string? RefreshToken { get; set; }

        public DateTime? RefreshTokenExpiryTime { get; set; }
    }
}
