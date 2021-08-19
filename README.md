This project is based off TWT Music Room and uses Django and React with Spotify's API

## Setup Instructions

### Install Required Python Modules

```bash
pip install -r requirements.txt
```
### Start Web Server

To launch the web application correctly you need to run the following sequence of commands.

run the django web server.

```bash
python manage.py runserver
```

### [Install Node.js](https://nodejs.org/en/)

### Install Node Modules

First cd into the ```frontend``` folder.

```bash
cd frontend
```
Next install all dependicies.
```bash
npm i
```

### Compile the Front-End

Run the production compile script
```bash
npm run build
```
or for development:
```bash
npm run dev
```
### Open the web application
Open your browser to the localhost address which the server is hosted at
When launching the Django server it will give you this information
for example `Starting development server at http://127.0.0.1:8000/`
