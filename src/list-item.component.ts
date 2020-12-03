import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "ui-list-item",
  templateUrl: "./list-item.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input()
  text: string;

  @Input()
  secondText: string;
}
