import { AddSubcategoryComponent } from './../../shared/modals/add-subcategory/add-subcategory.component';
import { AddCategoryComponent } from './../../shared/modals/add-category/add-category.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openCategoryModal() {
    const modal = await this.modalCtrl.create({
      component: AddCategoryComponent,
    });
    modal.present();
  }

  async openSubcategoryModal() {
    const modal = await this.modalCtrl.create({
      component: AddSubcategoryComponent,
    });
    modal.present();
  }
}
