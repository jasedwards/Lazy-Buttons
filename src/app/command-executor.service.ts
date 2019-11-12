import { Injectable, Inject, Optional } from "@angular/core";
import { commandButton } from "./tokens";
import { Command } from "./command";

@Injectable()
export class CommandExecutorService {
  commands: { [key: string]: Command } = {};
  constructor(@Inject("commandButton") @Optional() buttons: Command[]) {
    this.commands = this.buttonArrayToObj(buttons);
  }

  addCommand(command: Command){
    this.commands[command.id] = command;
  }

  private buttonArrayToObj(buttons: Command[]) {
    const result = {};
    for (const w of buttons) {
      result[w.id] = w;
    }
    return result;
  }

  init() {
    console.log(this);
  }
}
