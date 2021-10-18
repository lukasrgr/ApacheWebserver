import { ChangeDetectorRef, Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AbstractSite } from "../abstract/abstractSite";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  public formGroup: FormGroup | undefined;

  public currentPageTitle: 'About me' | 'Rename' | 'Other' = 'About me';

  constructor(
    private cdRef: ChangeDetectorRef,
    public router: Router,

  ) {
  }

  public segmentChanged(event: { detail: { value: string; }; }) {
    if (event.detail.value == "About me") {
      this.router.navigateByUrl("/start" + this.currentPageTitle, { replaceUrl: true });
      this.cdRef.detectChanges();
    }
    if (event.detail.value == "Rename") {
      this.router.navigateByUrl("/rename" + this.currentPageTitle, { replaceUrl: true });
      this.cdRef.detectChanges();
    }
  }
}
