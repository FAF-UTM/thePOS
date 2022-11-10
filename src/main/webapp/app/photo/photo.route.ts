import { Route } from '@angular/router';

import { PhotoComponent } from './photo.component';

export const Photo_ROUTE: Route = {
  path: '',
  component: PhotoComponent,
  data: {
    pageTitle: 'login.title',
  },
};
