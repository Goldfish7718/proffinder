# Proffinder (Engineering Exploration Project)🚀

Proffinder is a platform I built as project for my engineering exploration subject in college. Proffinder is built using the MERN stack and is a medium-sized project.

### TL;DR
> Proffinder is a platform which lets students input a 3 queries, the professor/faculty name, the day and the time slots which will then display their location (text-format) and their current status
> Proffinder is especially useful for large institutions where navigation can often be touch, or for freshers who are not aware of faulty locations.
> Proffinder implements authentication for faculty through [JWT](https://jwt.io/) (Json Web Tokens). Which lets faculty login, upload a timetable and set a *current status* which will be displayed for selected slots.

# How to run project

> Client
  1. To run this project, first run this command:  
  ```bash
  git clone https://github.com/Goldfish7718/proffinder.git
  ```
  2. Now run `cd client-production` and create a **.env** file and pass one environment variable: `VITE_API_URL=http://<API_URL>`. **Replace `<API_URL>` with actual API URL**
  3. Now run 2 commands:
  ```bash
  npm install
  npm start
  ```

> Server
  1. First *cd* into the *server* folder with the following command: `cd server`
  2. Now create a **.env** file and pass 2 Environment variables in it as follows:<br>
      a. `JWT_SECRET=<ANY_STRING>`. Replace `<ANY_STRING>` with any string you wish.<br>
      b. `db_URI=<YOUR_DB_CONNECTION_STRING>`. Replace `<YOUR_DB_CONNECTION_STRING>` with your actual MongoDB connection string.

  3. Now install dependencies and start the server

  ```bash
  npm install
  npm start
  ```
  
  4. You should see the following message in the terminal. (You can change the port number if you want). You can also pass a `PORT` environment variable if you wish.

  ```bash
  Server started at port 5000
  ```
  **Congratulations!** You've successfully started both the servers

## Important ⚠️

> The timeslots in this project are as per my college's timetable. You may adjust it accordingly in the *controllers* folder

# Contact 🔗

- For any queries, please contact me on my email: [tejasnanoti2@gmail.com](mailto:tejasnanoti2@gmail.com)
- [![Twitter: tejas_jsx](https://img.shields.io/twitter/follow/tejas_jsx?style=social)](https://twitter.com/tejas_jsx)
- [![Linkedin: tejasnanoti](https://img.shields.io/badge/-tejasnanoti-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tejas-nanoti-23965823b/)](https://www.linkedin.com/in/tejas-nanoti-23965823b/)
- [![GitHub Goldfish7718](https://img.shields.io/github/followers/Goldfish7718?label=follow&style=social)](https://github.com/Goldfish7718)

## Licenses 📃

- This project is licensed under the [MIT License](LICENSE).
