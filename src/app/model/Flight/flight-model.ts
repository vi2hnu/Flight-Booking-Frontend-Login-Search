export interface FlightModel {
    flightId: number;
    fromCityId: number;
    toCityId: number;
    departureDate: string;
    departureTime: string; 
    price: number;
    seatsAvailable: number;
    duration: number;
}
