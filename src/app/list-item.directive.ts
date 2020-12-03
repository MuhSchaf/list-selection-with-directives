import { Directive, EventEmitter, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[uiListItemDirective]"
})
export class ListItemDirective {
  isSelected: boolean;
  selectionChanged = new EventEmitter<void>();

  @Input()
  value: any;

  @HostListener("click") onSelect() {
    this.isSelected = true;
    console.log("got selected");
    console.log(this.value);
    this.selectionChanged.emit();
  }

  constructor() {}
}
