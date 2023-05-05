/* build an angular module to importe Material components */
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

/** Material components used by the app. */
const materialComponents = [
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatToolbarModule,
  MatDialogModule,
  MatDividerModule
]

/** Module to importe Material components */
@NgModule({
  declarations: [],
  imports: [
    ...materialComponents
  ],
  exports: [
    ...materialComponents
  ]
})
export class MaterialModule { }