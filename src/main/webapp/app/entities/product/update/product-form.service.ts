import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { IProduct, NewProduct } from '../product.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IProduct for edit and NewProductFormGroupInput for create.
 */
type ProductFormGroupInput = IProduct | PartialWithRequiredKeyOf<NewProduct>;

/**
 * Type that converts some properties for forms.
 */
type FormValueOf<T extends IProduct | NewProduct> = Omit<T, 'createdDate' | 'modifiedDate'> & {
  createdDate?: string | null;
  modifiedDate?: string | null;
};

type ProductFormRawValue = FormValueOf<IProduct>;

type NewProductFormRawValue = FormValueOf<NewProduct>;

type ProductFormDefaults = Pick<NewProduct, 'id' | 'active' | 'createdDate' | 'modifiedDate'>;

type ProductFormGroupContent = {
  id: FormControl<ProductFormRawValue['id'] | NewProduct['id']>;
  name: FormControl<ProductFormRawValue['name']>;
  code: FormControl<ProductFormRawValue['code']>;
  description: FormControl<ProductFormRawValue['description']>;
  price: FormControl<ProductFormRawValue['price']>;
  image: FormControl<ProductFormRawValue['image']>;
  imageContentType: FormControl<ProductFormRawValue['imageContentType']>;
  active: FormControl<ProductFormRawValue['active']>;
  createdDate: FormControl<ProductFormRawValue['createdDate']>;
  modifiedDate: FormControl<ProductFormRawValue['modifiedDate']>;
};

export type ProductFormGroup = FormGroup<ProductFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class ProductFormService {
  createProductFormGroup(product: ProductFormGroupInput = { id: null }): ProductFormGroup {
    const productRawValue = this.convertProductToProductRawValue({
      ...this.getFormDefaults(),
      ...product,
    });
    return new FormGroup<ProductFormGroupContent>({
      id: new FormControl(
        { value: productRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      name: new FormControl(productRawValue.name, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(100)],
      }),
      code: new FormControl(productRawValue.code, {
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      }),
      description: new FormControl(productRawValue.description, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(2000)],
      }),
      price: new FormControl(productRawValue.price, {
        validators: [Validators.required],
      }),
      image: new FormControl(productRawValue.image, {
        validators: [Validators.required],
      }),
      imageContentType: new FormControl(productRawValue.imageContentType),
      active: new FormControl(productRawValue.active, {
        validators: [Validators.required],
      }),
      createdDate: new FormControl(productRawValue.createdDate, {
        validators: [Validators.required],
      }),
      modifiedDate: new FormControl(productRawValue.modifiedDate),
    });
  }

  getProduct(form: ProductFormGroup): IProduct | NewProduct {
    return this.convertProductRawValueToProduct(form.getRawValue() as ProductFormRawValue | NewProductFormRawValue);
  }

  resetForm(form: ProductFormGroup, product: ProductFormGroupInput): void {
    const productRawValue = this.convertProductToProductRawValue({ ...this.getFormDefaults(), ...product });
    form.reset(
      {
        ...productRawValue,
        id: { value: productRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): ProductFormDefaults {
    const currentTime = dayjs();

    return {
      id: null,
      active: false,
      createdDate: currentTime,
      modifiedDate: currentTime,
    };
  }

  private convertProductRawValueToProduct(rawProduct: ProductFormRawValue | NewProductFormRawValue): IProduct | NewProduct {
    return {
      ...rawProduct,
      createdDate: dayjs(rawProduct.createdDate, DATE_TIME_FORMAT),
      modifiedDate: dayjs(rawProduct.modifiedDate, DATE_TIME_FORMAT),
    };
  }

  private convertProductToProductRawValue(
    product: IProduct | (Partial<NewProduct> & ProductFormDefaults)
  ): ProductFormRawValue | PartialWithRequiredKeyOf<NewProductFormRawValue> {
    return {
      ...product,
      createdDate: product.createdDate ? product.createdDate.format(DATE_TIME_FORMAT) : undefined,
      modifiedDate: product.modifiedDate ? product.modifiedDate.format(DATE_TIME_FORMAT) : undefined,
    };
  }
}
