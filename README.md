# FlightBooking app frontend using angular

## Backend Repossitory
Link = https://github.com/vi2hnu/Flight-Booking-Docker-and-Security

---

## Features
* Login page with validations
* Sign up page
* Flights search page
* Booking page
* Tickets history page
* Profile page with password change option
* Admin add flight page
* AuthGaurd implementation to protect routes
* Proper custom pop-ups with appropriate messages
* Minimalistic and clean UI

---
## Pages

| Path | Component | Title | Description | Admin |
|------|----------|-------|-------------|-------|
| `/login` | `Login` | Login | User login page | No |
| `/` | — | — | Redirects to `/login` | No |
| `/register` | `Register` | Sign Up | User registration page | No |
| `/search` | `Search` | Search Flights | Search available flights | No |
| `/booking` | `BookingComponent` | Book Flight | Flight booking page | No |
| `/tickets` | `TicketsComponent` | Your tickets | View booked tickets | No |
| `/profile` | `ProfileComponent` | Profile | User profile page | No |
| `/admin/add/flight` | `AdminFlightComponent` | Add Flight Schedule | Add new flight schedules | Yes |

---
## How to Start the Application

### Frontend
- Angular is required to run this project.
- Start the Angular server:
  ```bash
  ng serve
### Backend
- Ensure backend with all services are running with api gateway on port 9000 (refer to backend repository readme)

---
## SonarQube
<img width="1509" height="811" alt="Image" src="https://github.com/user-attachments/assets/e1cf76be-2b29-472a-ae94-5421682aac20" />

---
## Login page
- ### on load:
<img width="1917" height="1022" alt="Image" src="https://github.com/user-attachments/assets/16d5e376-b469-43b0-a2bf-c6550e3ef9d0" /> 

(Note: The login button won’t be available unless both fields are filled.)

---
## Signup page
- ### on load:
<img width="1904" height="906" alt="Image" src="https://github.com/user-attachments/assets/d60e2bb3-39da-4b01-8cd2-d1b3c25026fc" />

(Note: The create user button won’t be available unless all fields are filled and valid.)

---

## Search page
<img width="1902" height="915" alt="Image" src="https://github.com/user-attachments/assets/1ac4652c-3698-406f-bf94-ff7d162e5fc3" />

---
## Booking page
<img width="1891" height="900" alt="Image" src="https://github.com/user-attachments/assets/656f3c88-e4f6-4814-9101-dceb6b8f9054" />

---
## Tickets history page
<img width="1889" height="887" alt="Image" src="https://github.com/user-attachments/assets/7b823b9a-7196-4323-a7f3-6d5f4830321e" />

---
### Profile page 
<img width="1900" height="895" alt="Image" src="https://github.com/user-attachments/assets/648c8e32-3d76-4394-b0c0-8909b39a68e1" />

---
### Admin add-flight page
<img width="1880" height="885" alt="Image" src="https://github.com/user-attachments/assets/88a8f4aa-c26d-4485-99fb-268ee641ec75" />

---
## Footer
<img width="1887" height="364" alt="Image" src="https://github.com/user-attachments/assets/513989a9-4052-4ece-9c5a-c3793d0e79ea" />

(Note:This component is common to all pages)
