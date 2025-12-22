import { PassengerModel } from "./passenger-model.model";

export interface BookingModel {
    user: { id: number };
    scheduleId: number;
    returnTripId: number | null;
    passengers: PassengerModel[];
}
