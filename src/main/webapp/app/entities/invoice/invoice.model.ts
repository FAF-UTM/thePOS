import dayjs from 'dayjs/esm';
import { IUser } from 'app/entities/user/user.model';

export interface IInvoice {
  id: string;
  invoiceNr?: string | null;
  totalPrice?: number | null;
  createdDate?: dayjs.Dayjs | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
}

export type NewInvoice = Omit<IInvoice, 'id'> & { id: null };
