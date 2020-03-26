import { ModalController } from '@ionic/angular';
import { CategoryService } from './../../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {

  public category: Category = {}

  constructor(private categoryService: CategoryService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.category.status = true;
  }

  submit(){
    console.log(this.category);
    this.categoryService.addCategory(this.category).subscribe(
      res=> console.log(res),
      err=> console.log(err),
    )
  }

  modalClose() {
    this.modalCtrl.dismiss();
  }

}
