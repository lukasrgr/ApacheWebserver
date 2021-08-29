import { ChangeDetectorRef, Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AbstractSite } from "../abstract/abstractSite";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})
export class HeaderComponent extends AbstractSite {

  public formGroup: FormGroup | undefined;

  buttonActivated = "About me";
  public currentPage: 'About me' | 'Rename' | 'Other' = 'About me';

  constructor(
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,
    public router: Router,

  ) {
    super()
  }

  public segmentChanged(event: { detail: { value: string; }; }) {
    if (event.detail.value == "About me") {
      this.router.navigateByUrl("/" + this.currentPage, { replaceUrl: true });
      this.cdRef.detectChanges();
    }
    if (event.detail.value == "Rename") {
      this.router.navigateByUrl("/" + this.currentPage, { replaceUrl: true });
      this.cdRef.detectChanges();
    }
  }
  // ngOnInit() {
  //   this.formGroup = this.formBuilder.group({
  //     buttonActivated: new FormControl("")
  //   })
  // }
}
