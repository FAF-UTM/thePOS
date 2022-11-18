import { IOrder, NewOrder } from './order.model';

export const sampleWithRequiredData: IOrder = {
  id: '75b8b579-d1ae-490d-bf79-9f7f3c2b3616',
  orderNr: 'engineXXXXXXX',
  quantity: 56118,
  total: 27972,
};

export const sampleWithPartialData: IOrder = {
  id: 'd1e440bf-9737-4f5d-b2e3-97fd522f50ce',
  orderNr: 'Rustic BallXX',
  quantity: 13164,
  total: 14451,
};

export const sampleWithFullData: IOrder = {
  id: 'd538a2e0-d810-41bf-a9d3-dda1a8bdca82',
  orderNr: 'LegacyXXXXXXX',
  quantity: 66827,
  total: 96796,
};

export const sampleWithNewData: NewOrder = {
  orderNr: 'collaboration',
  quantity: 83008,
  total: 4776,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
