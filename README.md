# 🎥 Youtube Clone 🎥 [Live Site](https://youtube-vtwo.herokuapp.com/)

This Youtube clone will be a pixel perfect clone of [Youtube](https://Youtube.com). Users can log in to view their favorite videos, subscribe to other users, post their own videos, comment, on videos and like videos. 

[![Image from Gyazo](https://i.gyazo.com/6eea66f03d4b5abc89c85646acc94cad.gif)](https://gyazo.com/6eea66f03d4b5abc89c85646acc94cad)

## Features 

- Create an account, sign in, or log in as a demo user
- Create, view, edit, and delete
  - Videos
  - Comments
  - Likes (coming soon)
  - Playlists (coming soon)


## Technologies Used

- Python
- Flask
- SqlAlchemy
- alembic
- AWS
- Javascript
- React
- Redux
- React-Player

<h2> Getting started </h2><a name="howto"></a>
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/rammartinez00/Youtube_Clone.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***


*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

<br>

## Helpful commands
|    Command            |    Purpose    |
| -------------         | ------------- |
| `pipenv shell`        | Open your terminal in the virtual environment and be able to run flask commands without a prefix |
| `pipenv run`          | Run a command from the context of the virtual environment without actually entering into it. You can use this as a prefix for flask commands  |
| `flask db upgrade`    | Check in with the database and run any needed migrations  |
| `flask db downgrade`  | Check in with the database and revert any needed migrations  |
| `flask seed all`      | Just a helpful syntax to run queries against the db to seed data. See the **app/seeds** folder for reference and more details |
