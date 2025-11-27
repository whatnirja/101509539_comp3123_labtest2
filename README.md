# Weather Now – React Weather Application

## Live Demo
https://101509539-comp3123-labtest2.vercel.app/

## Project Description
This project is a React-based weather application that allows users to search for real-time weather information for any city. The app uses the WeatherAPI service to retrieve data such as temperature, weather conditions, humidity, wind speed, and related details. The interface is simple, clean, and easy to navigate.

## Features
- Search for any city
- Real-time weather information
- Temperature and “feels like” value
- Weather condition and icon
- Humidity and wind speed
- Error handling for invalid city names
- Environment variable for API key
- Responsive layout

## Technologies Used
- React (Create React App)
- JavaScript
- Axios
- WeatherAPI
- CSS
- Vercel (deployment)

## Set up Steps
1. Install dependencies
` npm install `
2. Create a .env file in the project root
` REACT_APP_WEATHERAPI_KEY=your_api_key_here`
Restart the server after creating .env.
Running the App (Development)
` npm start`
The app will run at:
` http://localhost:3000`


## Screenshots

### Main UI
<img width="1512" height="982" alt="dashboard" src="https://github.com/user-attachments/assets/21a40f5e-968c-4dff-b136-a5bf9c539b93" />


### Weather Search Result
### London
<img width="1512" height="982" alt="London" src="https://github.com/user-attachments/assets/9fb8e2ae-c3be-4199-9272-556d25c23b45" />
### Turkey
<img width="1512" height="982" alt="turkey" src="https://github.com/user-attachments/assets/9992ecf4-a6db-4092-8b0a-e65a85ba2931" />

### Error State
<img width="983" height="564" alt="Screenshot 2025-11-27 at 4 44 58 PM" src="https://github.com/user-attachments/assets/597800c2-e7c3-40d7-89fd-fce0da56ae04" />

### Postman API Test
### Toronto
<img width="1512" height="982" alt="postman" src="https://github.com/user-attachments/assets/06ef1125-ab85-4ccc-ad4d-aba2cd2b3fec" />

### London
<img width="1512" height="982" alt="postman-london" src="https://github.com/user-attachments/assets/eb7715c1-cb94-4557-bfe0-f531b1e2146c" />
### Vercel Deployment Dashboard
<img width="1512" height="982" alt="vercel" src="https://github.com/user-attachments/assets/96f95dde-2096-4e9b-94a2-2edf9603d45a" />


## Notes
Notes
WeatherAPI blocks direct browser calls unless CORS is allowed.
In development, use a CORS proxy to avoid CORS errors:
<img width="660" height="80" alt="Screenshot 2025-11-27 at 4 46 50 PM" src="https://github.com/user-attachments/assets/70e9899a-8a91-41e0-84c2-16fc6451d7af" />



