import { PassengerModel } from './passenger-model.model';

export class BookingModel {
  user: { id: number };
  scheduleId: number;
  returnTripId: number | null;
  passengers: PassengerModel[];

  constructor(
    user: { id: number } = { id: 0 },
    scheduleId: number = 0,
    returnTripId: number | null = null,
    passengers: PassengerModel[] = []
  ) {
    this.user = user;
    this.scheduleId = scheduleId;
    this.returnTripId = returnTripId;
    this.passengers = passengers;
  }
}
