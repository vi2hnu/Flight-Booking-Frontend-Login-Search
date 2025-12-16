# FlightBooking app frontend using angular

Simple Frontend made using angular for flight booking app. Has login, register and search flights page.

---

## Features
* Login page with validations
* Sign up page
* Flights search page
* Proper custom pop ups with appropriate messages
* Minimalistic and claen UI

---
## Pages

| Path        | Component | Title          | Description |
|------------|-----------|----------------|-------------|
| `/login`    | `Login`   | Login          | User login page |
| `/`         | —         | —              | Redirects to `/login` |
| `/register` | `Register`| Sign Up        | User registration page |
| `/search`   | `Search`  | Search Flights | Page for searching flights |

---
## How to Start the Application

### Frontend
- Angular is required to run this project.
- Start the Angular server:
  ```bash
  ng serve
### Backend
- Ensure backend with all services are running at port 9000

---
## SonarQube
<img width="1492" height="783" alt="Image" src="https://github.com/user-attachments/assets/02e28110-f80f-42d9-a21b-1da48ff1142d" />

---
## Login page
- ### on load:
<img width="1917" height="1022" alt="Image" src="https://github.com/user-attachments/assets/16d5e376-b469-43b0-a2bf-c6550e3ef9d0" />


- ### when provided wrong credentials:
<img width="1908" height="900" alt="Image" src="https://github.com/user-attachments/assets/50f18340-5e8b-4459-b479-acbe3bfbc2d2" />

(Note: The login button won’t be available unless both fields are filled.)

---
## Signup page
- ### on load:
<img width="1904" height="906" alt="Image" src="https://github.com/user-attachments/assets/d60e2bb3-39da-4b01-8cd2-d1b3c25026fc" />

- ### on entering invalid email or password:
<img width="1896" height="906" alt="Image" src="https://github.com/user-attachments/assets/7bd70be1-3e10-457e-b379-3af84da494c4" />

- ### on entering existing username or email:
<img width="1893" height="896" alt="Image" src="https://github.com/user-attachments/assets/2570f4ea-86ea-4ba0-a3cc-c35266eac420" />

(Note: The create user button won’t be available unless all fields are filled and valid.)
---

## Search page
<img width="1902" height="915" alt="Image" src="https://github.com/user-attachments/assets/1ac4652c-3698-406f-bf94-ff7d162e5fc3" />

- ### when no flights found between 2 citis:
<img width="1870" height="891" alt="Image" src="https://github.com/user-attachments/assets/46dc3f77-7257-4700-8f31-03b97aa32635" />

---
## Footer
<img width="1887" height="364" alt="Image" src="https://github.com/user-attachments/assets/513989a9-4052-4ece-9c5a-c3793d0e79ea" />

(Note: this component is common to all pages)
