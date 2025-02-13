# SportSee

This repo contains only front-end code to run the project SportSee. SportSee is a sports analytics dashboard that helps users track their fitness progress. 

## 1. Prerequisites

*Node.js
*Yarn or npm

## 2. Clone the Repository

git clone https://github.com/AlenaKush/SportSee

## 2. Install Dependencies

$ yarn install
# or
$ npm install

## 3. Start the Development Server

$ yarn dev
# or
$ npm run dev

This will start the frontend on http://localhost:5173/.
The main route is http://localhost:5173/user/:id

## 4. Work with Mock Data

By default, the project runs with mock data. If you want to use real back-end data:

    1. Clone and set up the back-end repository:

        git clone https://github.com/OpenClassrooms-Student-Center/SportSee

    2. Start the back-end development server.

    3. Update the src/api/api.js file:

        const userDataFake = import.meta.env.VITE_TEST === 'false';

This will switch the project to fetch data from the back-end.

## 5. Features

User Dashboard: View user fitness progress

Activity Chart: Displays daily activity using a bar chart

Session Chart: Shows average session duration using a line chart

Performance Chart: Renders a radar chart for user performance

Score Chart: Displays the user’s daily score using a radial bar chart

## 6. Project Structure

SportSee/
│── src/
│   |──api/                  # API services
│   ├── assets/              # Images & icons
│   ├── components/          # Reusable components
│   ├── styles/              # SASS stylesheets
│   ├── utils/               # Utility JS functions
│   ├── App.js               # Main app component with routes
│   ├── main.js              # Entry point

## 7. Author

Alena Kushchina 
https://github.com/AlenaKush
