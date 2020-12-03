import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ListItemComponent } from "../list-item.component";
import { ListComponent } from "./list.component";
import { ListDirective } from "./list.directive";
import { ListItemDirective } from "./list-item.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ListItemComponent,
    ListComponent,
    ListDirective,
    ListItemDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
