import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { } from '@angular/material';
import { MatDialogModule, MatExpansionModule, MatNativeDateModule, MatDatepickerModule, MatAutocompleteModule, MatDividerModule, MatSliderModule, MatSelectModule, MatCheckboxModule, MatListModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule  } from '@angular/material';

@NgModule({
  imports: [
    // CommonModule,
    MatToolbarModule, MatIconModule, MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDialogModule
  ],
  exports: [
    // MatIcon,
    MatToolbarModule, MatIconModule, MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDialogModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
