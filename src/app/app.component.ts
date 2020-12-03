import { Component, VERSION } from "@angular/core";

class ListItem {
  constructor(public text: string, public secondText: string) {}
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  items: ListItem[];

  constructor() {
    this.items = [];
    this.items.push(new ListItem("first", "Second"));
    this.items.push(new ListItem("first2", "Second2"));
    this.items.push(new ListItem("first3", "Second3"));
  }
}
