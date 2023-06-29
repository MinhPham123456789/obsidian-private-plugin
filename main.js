/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ExamplePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var ExamplePlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.addCommand({
      id: "to-color-2",
      name: "To Color 2",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection('<font style="color:var(--toggle-color-2)">' + selection + "</font>");
      }
    });
    this.addCommand({
      id: "to-color-1",
      name: "To Color 1",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection('<font style="color:var(--toggle-color-1)">' + selection + "</font>");
      }
    });
    this.addCommand({
      id: "to-color-3",
      name: "To Color 3",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection('<font style="color:var(--toggle-color-3)">' + selection + "</font>");
      }
    });
    this.addCommand({
      id: "to-color-x",
      name: "To Color X",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        let regex_pattern = '(.*)<font style="color:var(--toggle-color-1)">(.*)</font>(.*)';
        let extract_result = selection.match(regex_pattern);
        if (extract_result !== null) {
          let result = "";
          extract_result.forEach((x, i) => result = result + x);
          editor.replaceSelection(result);
        } else {
          editor.replaceSelection('<font style="color:var(--toggle-color-1)">' + selection + "</font>");
        }
      }
    });
    this.addCommand({
      id: "to-underlined",
      name: "To Underlined",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection("<u>" + selection + "</u>");
      }
    });
    this.addCommand({
      id: "to-bold",
      name: "To Bold",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection("<b>" + selection + "</b>");
      }
    });
    this.addCommand({
      id: "to-italic",
      name: "To Italic",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        editor.replaceSelection("<i>" + selection + "</i>");
      }
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRWRpdG9yLCBQbHVnaW4gfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwidG8tY29sb3ItMlwiLFxuICAgICAgbmFtZTogXCJUbyBDb2xvciAyXCIsXG4gICAgICBlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oJzxmb250IHN0eWxlPVwiY29sb3I6dmFyKC0tdG9nZ2xlLWNvbG9yLTIpXCI+JyArIHNlbGVjdGlvbiArICc8L2ZvbnQ+Jyk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJ0by1jb2xvci0xXCIsXG4gICAgICBuYW1lOiBcIlRvIENvbG9yIDFcIixcbiAgICAgIGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbignPGZvbnQgc3R5bGU9XCJjb2xvcjp2YXIoLS10b2dnbGUtY29sb3ItMSlcIj4nICsgc2VsZWN0aW9uICsgJzwvZm9udD4nKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInRvLWNvbG9yLTNcIixcbiAgICAgIG5hbWU6IFwiVG8gQ29sb3IgM1wiLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvcikgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKCc8Zm9udCBzdHlsZT1cImNvbG9yOnZhcigtLXRvZ2dsZS1jb2xvci0zKVwiPicgKyBzZWxlY3Rpb24gKyAnPC9mb250PicpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwidG8tY29sb3IteFwiLFxuICAgICAgbmFtZTogXCJUbyBDb2xvciBYXCIsXG4gICAgICBlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcblx0bGV0IHJlZ2V4X3BhdHRlcm4gPSAnKC4qKVxcPGZvbnQgc3R5bGU9XFxcImNvbG9yOnZhclxcKC0tdG9nZ2xlLWNvbG9yLTFcXClcXFwiXFw+KC4qKVxcPC9mb250XFw+KC4qKSc7XG4gICAgICAgIGxldCBleHRyYWN0X3Jlc3VsdCA9IHNlbGVjdGlvbi5tYXRjaChyZWdleF9wYXR0ZXJuKTtcblx0aWYgKGV4dHJhY3RfcmVzdWx0ICE9PSBudWxsIClcbiAgICAgICAge1xuXHQgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICBleHRyYWN0X3Jlc3VsdC5mb3JFYWNoKCh4LCBpKSA9PiByZXN1bHQgPSByZXN1bHQgKyB4KTtcblx0ICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihyZXN1bHQpO1xuXHR9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKCc8Zm9udCBzdHlsZT1cImNvbG9yOnZhcigtLXRvZ2dsZS1jb2xvci0xKVwiPicgKyBzZWxlY3Rpb24gKyAnPC9mb250PicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJ0by11bmRlcmxpbmVkXCIsXG4gICAgICBuYW1lOiBcIlRvIFVuZGVybGluZWRcIixcbiAgICAgIGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbignPHU+JyArIHNlbGVjdGlvbiArICc8L3U+Jyk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJ0by1ib2xkXCIsXG4gICAgICBuYW1lOiBcIlRvIEJvbGRcIixcbiAgICAgIGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbignPGI+JyArIHNlbGVjdGlvbiArICc8L2I+Jyk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJ0by1pdGFsaWNcIixcbiAgICAgIG5hbWU6IFwiVG8gSXRhbGljXCIsXG4gICAgICBlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oJzxpPicgKyBzZWxlY3Rpb24gKyAnPC9pPicpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUErQjtBQUUvQixJQUFxQixnQkFBckIsY0FBMkMsdUJBQU87QUFBQSxFQUNoRCxNQUFNLFNBQVM7QUFDYixTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLGdCQUFnQixDQUFDLFdBQW1CO0FBQ2xDLGNBQU0sWUFBWSxPQUFPLGFBQWE7QUFDdEMsZUFBTyxpQkFBaUIsK0NBQStDLFlBQVksU0FBUztBQUFBLE1BQzlGO0FBQUEsSUFDRixDQUFDO0FBQ0QsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsQ0FBQyxXQUFtQjtBQUNsQyxjQUFNLFlBQVksT0FBTyxhQUFhO0FBQ3RDLGVBQU8saUJBQWlCLCtDQUErQyxZQUFZLFNBQVM7QUFBQSxNQUM5RjtBQUFBLElBQ0YsQ0FBQztBQUNELFNBQUssV0FBVztBQUFBLE1BQ2QsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sZ0JBQWdCLENBQUMsV0FBbUI7QUFDbEMsY0FBTSxZQUFZLE9BQU8sYUFBYTtBQUN0QyxlQUFPLGlCQUFpQiwrQ0FBK0MsWUFBWSxTQUFTO0FBQUEsTUFDOUY7QUFBQSxJQUNGLENBQUM7QUFDRCxTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLGdCQUFnQixDQUFDLFdBQW1CO0FBQ2xDLGNBQU0sWUFBWSxPQUFPLGFBQWE7QUFDN0MsWUFBSSxnQkFBZ0I7QUFDYixZQUFJLGlCQUFpQixVQUFVLE1BQU0sYUFBYTtBQUN6RCxZQUFJLG1CQUFtQixNQUNoQjtBQUNMLGNBQUksU0FBUztBQUNOLHlCQUFlLFFBQVEsQ0FBQyxHQUFHLE1BQU0sU0FBUyxTQUFTLENBQUM7QUFDM0QsaUJBQU8saUJBQWlCLE1BQU07QUFBQSxRQUNoQyxPQUVPO0FBQ0UsaUJBQU8saUJBQWlCLCtDQUErQyxZQUFZLFNBQVM7QUFBQSxRQUM5RjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFDRCxTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLGdCQUFnQixDQUFDLFdBQW1CO0FBQ2xDLGNBQU0sWUFBWSxPQUFPLGFBQWE7QUFDdEMsZUFBTyxpQkFBaUIsUUFBUSxZQUFZLE1BQU07QUFBQSxNQUNwRDtBQUFBLElBQ0YsQ0FBQztBQUNELFNBQUssV0FBVztBQUFBLE1BQ2QsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sZ0JBQWdCLENBQUMsV0FBbUI7QUFDbEMsY0FBTSxZQUFZLE9BQU8sYUFBYTtBQUN0QyxlQUFPLGlCQUFpQixRQUFRLFlBQVksTUFBTTtBQUFBLE1BQ3BEO0FBQUEsSUFDRixDQUFDO0FBQ0QsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsQ0FBQyxXQUFtQjtBQUNsQyxjQUFNLFlBQVksT0FBTyxhQUFhO0FBQ3RDLGVBQU8saUJBQWlCLFFBQVEsWUFBWSxNQUFNO0FBQUEsTUFDcEQ7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
