# SpaceXLaunches

This repository contains a project built using .NET Core Web API (version 8) for the backend, with an integrated Angular 17 frontend. The project uses SQLite as the database for storing data.

# Prerequisites
Before you can run the project, ensure that you have the following installed:

.NET 8 SDK (Required to build and run the .NET Core Web API)
Node.js (Required to run the Angular frontend)
SQLite (For the database)
Angular CLI

# Frontend Setup (Angular 17)
Navigate to the Angular Frontend Folder:

In the same root directory as the API project, navigate to the Angular project folder:
cd ClientApp

Install Dependencies:
Install the necessary npm packages for the Angular frontend:
npm install

Run the Angular Application:
To run the frontend, use:
npm start

# Database Setup (SQLite)

 Ensure that the appsettings.json or appsettings.Development.json (depending on the environment) is correctly configured for SQLite:
 "ConnectionStrings": {
  "DefaultConnection": "Data Source=your-database.db"
}

Add the initial migrations (if migrations aren't already added):
dotnet ef migrations add InitialCreate

Update the database (this will create the SQLite database file if it doesn't exist):
dotnet ef database update
