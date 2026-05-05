# F1DB Client

A ReactJS client for the [Open Source Formula 1 Database](https://github.com/f1db/f1db).

This repository is comprised of the frontend client and the backend server. Due to the fact that this project is focused on frontend development, the backend server is only a [JSON-Server](https://www.npmjs.com/package/json-server) instance which serves a JSON representation of F1DB.

## Setup

### API

On the project root folder, navigate to the API directory.

``cd api``

So far, the only dependency the API has is JSON-Server itself. If you already have this dependency installed, you can use your already installed instance. You can also install JSON-Server for this project only by running:

``npm i``

Once JSON-Server is installed, you need to run the bash file responsible for downloading the latest version of the F1DB JSON file. The file itself is quite large (the current version as of writing has whole 83,7 MB) and is updated in a grand prix basis, but the downloadable asset comes in a zip file. The bash file in question downloads the zip file and extract its contents to the api/db folder.

``./download-database.sh``

Finally, in the ``api`` folder, execute the server by running:

``npm run server``

### App

At the project root folder, navigate to the API directory.

``cd app``

Install its dependencies by running

``npm i``

At the ``app`` folder, execute the frontend server by running:

``npm run dev``

You can also generate an optimised build by running

``npm run build``

