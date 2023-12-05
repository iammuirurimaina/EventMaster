

# Event Masters App

This is a web-based event ticketing application built using Flask for the backend and React for the frontend. Users can sign up, log in, view upcoming events, and purchase event tickets.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Python](https://www.python.org/) (3.10)
- [Node.js](https://nodejs.org/) (12+)
- [npm](https://www.npmjs.com/) (6+)
- [SQLite](https://www.sqlite.org/) (for local development)

### Installation

1. Clone the repository:

   ```shell
   git clone 
   ```

2. Change into the project directory:

   ```shell
   cd server
   ```

3. Set up the Flask backend:

   - Create a virtual environment:

     ```shell
     pipenv install
     ```

   - Activate the virtual environment:



     - On macOS and Linux:

       ```shell
       Pipenv Shell
       ```

   - Install Python dependencies:

     ```shell
     pip install
     ```

   - Set up the SQLite database:

     ```shell
     flask db init
     flask db migrate
     flask db upgrade
     ```

4. Set up the React frontend:

   - Change into the `Client` directory:

     ```shell
     cd Client
     ```

   - Install JavaScript dependencies:

     ```shell
     npm install
     ```

5. Start the Flask backend:

   ```shell
   flask run
   ```

6. Start the React frontend (from the `frontend` directory):

   ```shell
   npm start
   ```

Your application should now be running locally. You can access it in your web browser at `http://localhost:4000`.

## Usage

- Register a new user account or log in with an existing one.
- Browse upcoming events and click "Buy Tickets" to purchase tickets for an event.
- View your purchased tickets in the "My Tickets" section.

## Features

- User registration and authentication.
- View upcoming events with event details.
- Purchase event tickets.
- View purchased tickets in the "My Tickets" section.

## Technologies Used

- Flask (Python)
- React (JavaScript)
- SQLAlchemy (Python)
- SQLite (Database)
- Node.js
- npm

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Create a pull request to the `main` branch of the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
**ScreenShots**
![Image (![image](https://github.com/iammuirurimaina/phase3_project/assets/135036980/1c6c5fed-3d9f-4b5e-883f-ea4e5cebc568)
![Image (![image] (![image](https://github.com/iammuirurimaina/phase3_project/assets/135036980/34d3a833-dfcf-40b4-b5bd-60bae6d28002)

![Image (![image](![image](https://github.com/iammuirurimaina/phase3_project/assets/135036980/8dda3d67-11e9-4429-8e89-f21febbf7ffe)

![Image (![image] (![image](https://github.com/iammuirurimaina/phase3_project/assets/135036980/88621529-71b9-4a01-b485-9d391994bbca)

