import dayjs from 'dayjs/esm';

import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 'c442dfc5-f1e3-4a23-b568-16f6b07dcadc',
  name: 'Account experiences Garden',
  code: 'FreshXXX',
  description: 'RAM yellow silver',
  price: 19060,
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
  active: true,
  createdDate: dayjs('2022-11-17T03:27'),
};

export const sampleWithPartialData: IProduct = {
  id: 'b5084bec-cd55-42ab-a2c1-374ca3b776a4',
  name: 'architectures enhance',
  code: 'bricks-a',
  description: 'out-of-the-box',
  price: 22531,
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
  active: true,
  createdDate: dayjs('2022-11-16T11:20'),
};

export const sampleWithFullData: IProduct = {
  id: '8bb9bbcf-c4d9-42e5-b6d0-7a564eb7f653',
  name: 'capacitor',
  code: 'toolset ',
  description: 'hacking',
  price: 77268,
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
  active: true,
  createdDate: dayjs('2022-11-16T16:25'),
  modifiedDate: dayjs('2022-11-17T04:43'),
};

export const sampleWithNewData: NewProduct = {
  name: 'green',
  code: 'hack Shi',
  description: 'virtual',
  price: 30287,
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
  active: false,
  createdDate: dayjs('2022-11-17T08:07'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
