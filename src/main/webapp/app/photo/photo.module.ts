import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';

import { SharedModule } from 'app/shared/shared.module';
import { PHOTO_ROUTE } from './photo.route';
import { PhotoComponent } from './photo.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([PHOTO_ROUTE]), WebcamModule],
  declarations: [PhotoComponent],
})
export class PhotoModule {}
