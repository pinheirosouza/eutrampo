import { CategoryService } from './../../shared/services/category/category.service';
import { AddSubcategoryComponent } from './../../shared/modals/add-subcategory/add-subcategory.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { AddCategoryComponent } from '../../shared/modals/add-category/add-category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AddCategoryComponent, AddSubcategoryComponent],
  entryComponents: [ AddCategoryComponent, AddSubcategoryComponent,]
})

export class HomePageModule {}
