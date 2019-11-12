export interface Command {
  execute: (folder: any)=>void;
  id: string;
}