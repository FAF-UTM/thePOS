import dayjs from 'dayjs/esm';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 'e9811367-3777-4285-ab8f-e916c058e54f',
  invoiceNr: 'card ChickenX',
  totalPrice: 13727,
  createdDate: dayjs('2022-11-16T19:07'),
};

export const sampleWithPartialData: IInvoice = {
  id: '2c5efde1-3186-4e04-9cf8-39c78bc7ad4f',
  invoiceNr: 'Liberia AvonX',
  totalPrice: 67558,
  createdDate: dayjs('2022-11-16T12:15'),
};

export const sampleWithFullData: IInvoice = {
  id: '10f51ca2-48cf-488a-82ac-5036d4106258',
  invoiceNr: 'silver Saving',
  totalPrice: 18603,
  createdDate: dayjs('2022-11-17T06:38'),
};

export const sampleWithNewData: NewInvoice = {
  invoiceNr: 'copyingXXXXXX',
  totalPrice: 59580,
  createdDate: dayjs('2022-11-17T07:58'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
