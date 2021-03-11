import { Component } from "@angular/core";
import { Server, ServerInput } from "./models/app.models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements: Server[] = [
    { type: "server", name: "Test", content: "Just a Test" },
  ];

  onServerAdded(server: ServerInput) {
    this.serverElements.push({
      type: 'server',
      name: server.name,
      content: server.content,
    });
  }

  onBlueprintAdded(server: ServerInput) {
    this.serverElements.push({
      type: 'blueprint',
      name: server.name,
      content: server.content,
    });
  }
}
