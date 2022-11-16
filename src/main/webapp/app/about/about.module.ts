import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';

import { SharedModule } from 'app/shared/shared.module';
import { ABOUT_ROUTE } from './about.route';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([ABOUT_ROUTE]), WebcamModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
