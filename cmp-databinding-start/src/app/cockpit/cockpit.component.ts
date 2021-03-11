import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ServerInput } from "../models/app.models";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  newServer = { name: "", content: "" } as ServerInput;

  @Output()
  serverCreated = new EventEmitter<ServerInput>();

  @Output()
  blueprintCreated = new EventEmitter<ServerInput>();;

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverCreated.emit(this.newServer)
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(this.newServer)
  }
}
