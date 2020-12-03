import {
  AfterContentInit,
  ContentChildren,
  Directive,
  QueryList
} from "@angular/core";
import { ListItemDirective } from "./list-item.directive";

@Directive({
  selector: "[uilistdirective]"
})
export class ListDirective implements AfterContentInit {
  constructor() {}

  @ContentChildren(ListItemDirective, { descendants: true })
  selectables: QueryList<ListItemDirective>;

  ngAfterContentInit(): void {
    this.selectables.forEach(selectable => {
      selectable.selectionChanged.subscribe(() => {
        console.log("selection changed");
        console.log("selectable", selectable.value);
      });
    });
  }
}
