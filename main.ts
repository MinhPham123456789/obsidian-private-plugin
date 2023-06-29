import { Editor, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "to-color-2",
      name: "To Color 2",
      editorCallback: (editor: Editor) => {
        const selection = editor.getSelection();
        let regex_pattern = '\"\>(.*)\</font\>';
        let extract_result = selection.match(regex_pattern);
	if (extract_result !== null )
        {
	  let result = '';
          extract_result.forEach((x, i) => {if (i!== 0) {result = result + x}});
	  editor.replaceSelection(result);
	}
        else
        {
          editor.replaceSelection('<font style="color:var(--toggle-color-2)">' + selection + '</font>');
        }
      },
    });
    this.addCommand({
      id: "to-color-1",
      name: "To Color 1",
      editorCallback: (editor: Editor) => {
        const selection = editor.getSelection();
        let regex_pattern = '\"\>(.*)\</font\>';
        let extract_result = selection.match(regex_pattern);
	if (extract_result !== null )
        {
	  let result = '';
          extract_result.forEach((x, i) => {if (i!== 0) {result = result + x}});
	  editor.replaceSelection(result);
	}
        else
        {
          editor.replaceSelection('<font style="color:var(--toggle-color-1)">' + selection + '</font>');
        }
      },
    });
    this.addCommand({
      id: "to-color-3",
      name: "To Color 3",
      editorCallback: (editor: Editor) => {
        const selection = editor.getSelection();
        let regex_pattern = '\"\>(.*)\</font\>';
        let extract_result = selection.match(regex_pattern);
	if (extract_result !== null )
        {
	  let result = '';
          extract_result.forEach((x, i) => {if (i!== 0) {result = result + x}});
	  editor.replaceSelection(result);
	}
        else
        {
          editor.replaceSelection('<font style="color:var(--toggle-color-3)">' + selection + '</font>');
        }
      },
    });
    this.addCommand({
      id: "to-color-x",
      name: "To Color X",
      editorCallback: (editor: Editor) => {
        const selection = editor.getSelection();
	let regex_pattern = '\"\>(.*)\</font\>';  // not yet can do this (.*)regex(.*)regex(.*), cause sth broken in this (.*)\<font style=\"color:var\(--toggle-color-1\)\"\>(.*)\</font\>(.*)
		// (.*)\<font style=\"color:var\\(--toggle-color-1\\)\"\>(.*)\</font\>(.*), need double \\ at parentheses, why?
        let extract_result = selection.match(regex_pattern);
        console.log(extract_result)
	if (extract_result !== null )
        {
	  let result = '';
          extract_result.forEach((x, i) => {if (i!== 0) {result = result + x}});
	  editor.replaceSelection(result);
	}
        else
        {
          editor.replaceSelection('<font style="color:var(--toggle-color-1)">' + selection + '</font>');
        }
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
        editor.replaceSelection('<b>' + selection + '</b>');
      },
    });
    this.addCommand({
      id: "to-italic",
      name: "To Italic",
      editorCallback: (editor: Editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection('<i>' + selection + '</i>');
      },
    });
  }
}
