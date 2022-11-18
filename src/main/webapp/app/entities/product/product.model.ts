import dayjs from 'dayjs/esm';

export interface IProduct {
  id: string;
  name?: string | null;
  code?: string | null;
  description?: string | null;
  price?: number | null;
  image?: string | null;
  imageContentType?: string | null;
  active?: boolean | null;
  createdDate?: dayjs.Dayjs | null;
  modifiedDate?: dayjs.Dayjs | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
