import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { PHOTO_ROUTE } from './photo.route';
import { PhotoComponent } from './photo.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([PHOTO_ROUTE])],
  declarations: [PhotoComponent],
})
export class PhotoModule {}
