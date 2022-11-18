import { IProduct } from 'app/entities/product/product.model';
import { IInvoice } from 'app/entities/invoice/invoice.model';

export interface IOrder {
  id: string;
  orderNr?: string | null;
  quantity?: number | null;
  total?: number | null;
  product?: Pick<IProduct, 'id' | 'name'> | null;
  invoice?: Pick<IInvoice, 'id'> | null;
}

export type NewOrder = Omit<IOrder, 'id'> & { id: null };
