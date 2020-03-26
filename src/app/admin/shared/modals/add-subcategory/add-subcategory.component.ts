import { SearchCategoriesService } from "./../../../../shared/services/search-categories/search-categories.service";
import { ModalController } from "@ionic/angular";
import { CategoryService } from "./../../services/category/category.service";
import { Subcategory } from "./../../interfaces/subcategory";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-subcategory",
  templateUrl: "./add-subcategory.component.html",
  styleUrls: ["./add-subcategory.component.scss"]
})
export class AddSubcategoryComponent implements OnInit {
  public categoriesList: any;
  public selectedCategory = null;

  public subcategory: Subcategory = {};

  constructor(
    private categoryService: CategoryService,
    public modalCtrl: ModalController,
    private searchCategoriesService: SearchCategoriesService
  ) {
    this.listCategories();
  }

  ngOnInit() {
    this.subcategory.status = true;
  }

  listCategories() {
    this.searchCategoriesService.getCategories().subscribe(res => {
      this.categoriesList = res;
      console.log(res);
    });
  }

  submit() {
    this.subcategory.category_id = this.categoriesList[this.selectedCategory]._id;
    this.categoryService.addSubcategory(this.subcategory).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    console.log(this.subcategory);
  }

  modalClose() {
    this.modalCtrl.dismiss();
  }

  clearCategory() {
    console.log("clear");
    this.selectedCategory = null;
  }
}
