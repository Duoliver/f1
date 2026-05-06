# F1DB Client

A ReactJS client for the [Open Source Formula 1 Database](https://github.com/f1db/f1db).

It is a quite simple project for getting the grips with some Tanstack tools and applying Test-Driven Development practices. The interface is based on the international Formula One television broadcast graphics package used from 1994 to 2003.

This repository is comprised of the frontend client and the backend server. Due to the fact that this project is focused on frontend development, the backend server is only a [JSON-Server](https://www.npmjs.com/package/json-server) instance which serves a JSON representation of F1DB.

As it stands, the client currently displays every race result and starting grid of every race of every season. It has a main menu, which leads to the "Seasons" page, where a season can be pick and then loads the "Season" page, comprised of the schedule of that season. By clicking on a race card, which contains basic information of that grand prix, it opens the "Season Grand Prix" page, where both starting grid and final race results can be accessed.

## Stack

This React 19 client, built with Vite, uses some tools from Tanstack, being them Tanstack Router, Tanstack Query and Tanstack Table. Router manages the routing elements of the application, implemented through file-based routing; Query deals with server state management; and Table is the abstraction layer for developing and rendering tables more efficiently. Tailwind is used for styling purposes. Vitest and React Testing Library are used for unit and integration tests.

## Setup

### API

On the project root folder, navigate to the API directory.

``cd api``

So far, the only dependency the API has is JSON-Server itself. If you already have this dependency installed, you can use your already installed instance. You can also install JSON-Server for this project only by running:

``npm i``

Once JSON-Server is installed, you need to run the bash file responsible for downloading the latest version of the F1DB JSON file. The file itself is quite large (the current version as of writing has whole 83,7 MB) and is updated in a grand prix basis, but the downloadable asset comes in a zip file, which compresses its size. The bash file in question downloads the zip file and extract its contents to the api/db folder.

``./download-database.sh``

Finally, in the ``api`` folder, execute the server by running:

``npm run server``

### App

At the project root folder, navigate to the API directory.

``cd app``

Install its dependencies by running:

``npm i``

Copy the .env.example file as a proper .env:

``cp .env.example .env``

And change its value if needed. The API runs on port 3000 by default, so it should work out of the box. 

Still at the ``app`` folder, execute the frontend server by running:

``npm run dev``

You can also generate an optimised build by running:

``npm run build``

