import { Component, Input } from "@angular/core";
import { Icon } from "../shared/types/types";

@Component({
    selector: 'section',
    templateUrl: './section.html',
})
export class Section {

    /** Icon with color, size and name */
    @Input()
    icon!: Icon;

    /** Label-Header */
    @Input()
    label!: string;

    ngOnInit() { }
}
