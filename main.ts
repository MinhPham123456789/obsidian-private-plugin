import { Editor, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "to-green",
      name: "To Green",
      editorCallback: (editor: Editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection('<font style="color:90EE90">' + selection + '</font>');
      },
    });
    this.addCommand({
      id: "to-red",
      name: "To Red",
      editorCallback: (editor: Editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection('<font style="color:red">' + selection + '</font>');
      },
    });
    this.addCommand({
      id: "to-underlined",
      name: "To Underlined",
      editorCallback: (editor: Editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection('<u>' + selection + '</u>');
      },
    });
    this.addCommand({
      id: "to-bold",
      name: "To Bold",
      editorCallback: (editor: Editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection('**' + selection + '**');
      },
    });
    this.addCommand({
      id: "to-italic",
      name: "To Italic",
      editorCallback: (editor: Editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection('*' + selection + '*');
      },
    });
  }
}
