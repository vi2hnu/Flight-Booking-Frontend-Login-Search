export class PassengerModel {
  constructor(
    public name: string = '',
    public gender: 'MALE' | 'FEMALE' = 'MALE',
    public meal: 'VEG' | 'NONVEG' = 'VEG',
    public seatPos: string = ''
  ) {}
}
