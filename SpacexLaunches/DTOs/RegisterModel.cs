﻿namespace SpacexLaunches.DTOs
{
    public class RegisterModel
    {
        public required string Name { get; set; }
        public string? LastName { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
    }

}
