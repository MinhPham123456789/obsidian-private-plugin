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
        let regex_pattern = '(.*)<font style="color:var\\(--toggle-color-2\\)">(.*)</font>(.*)';
        let extract_result = selection.match(regex_pattern);
        if (extract_result !== null) {
          let result = "";
          extract_result.forEach((x, i) => {
            if (i !== 0) {
              result = result + x;
            }
          });
          editor.replaceSelection(result);
        } else {
          editor.replaceSelection('<font style="color:var(--toggle-color-2)">' + selection + "</font>");
        }
      }
    });
    this.addCommand({
      id: "to-color-1",
      name: "To Color 1",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        let regex_pattern = '(.*)<font style="color:var\\(--toggle-color-1\\)">(.*)</font>(.*)';
        let extract_result = selection.match(regex_pattern);
        if (extract_result !== null) {
          let result = "";
          extract_result.forEach((x, i) => {
            if (i !== 0) {
              result = result + x;
            }
          });
          editor.replaceSelection(result);
        } else {
          editor.replaceSelection('<font style="color:var(--toggle-color-1)">' + selection + "</font>");
        }
      }
    });
    this.addCommand({
      id: "to-color-3",
      name: "To Color 3",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        let regex_pattern = '(.*)<font style="color:var\\(--toggle-color-3\\)">(.*)</font>(.*)';
        let extract_result = selection.match(regex_pattern);
        if (extract_result !== null) {
          let result = "";
          extract_result.forEach((x, i) => {
            if (i !== 0) {
              result = result + x;
            }
          });
          editor.replaceSelection(result);
        } else {
          editor.replaceSelection('<font style="color:var(--toggle-color-3)">' + selection + "</font>");
        }
      }
    });
    this.addCommand({
      id: "to-color-x",
      name: "To Color X",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        let regex_pattern = '(.*)<font style="color:var\\(--toggle-color-1\\)">(.*)</font>(.*)';
        let extract_result = selection.match(regex_pattern);
        console.log(extract_result);
        if (extract_result !== null) {
          let result = "";
          extract_result.forEach((x, i) => {
            if (i !== 0) {
              result = result + x;
            }
          });
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
        let regex_pattern = "(.*)<u>(.*)</u>(.*)";
        let extract_result = selection.match(regex_pattern);
        if (extract_result !== null) {
          let result = "";
          extract_result.forEach((x, i) => {
            if (i !== 0) {
              result = result + x;
            }
          });
          editor.replaceSelection(result);
        } else {
          editor.replaceSelection("<u>" + selection + "</u>");
        }
      }
    });
    this.addCommand({
      id: "to-bold",
      name: "To Bold",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        let regex_pattern = "(.*)<b>(.*)</b>(.*)";
        let extract_result = selection.match(regex_pattern);
        if (extract_result !== null) {
          let result = "";
          extract_result.forEach((x, i) => {
            if (i !== 0) {
              result = result + x;
            }
          });
          editor.replaceSelection(result);
        } else {
          editor.replaceSelection("<b>" + selection + "</b>");
        }
      }
    });
    this.addCommand({
      id: "to-italic",
      name: "To Italic",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        let regex_pattern = "(.*)<i>(.*)</i>(.*)";
        let extract_result = selection.match(regex_pattern);
        if (extract_result !== null) {
          let result = "";
          extract_result.forEach((x, i) => {
            if (i !== 0) {
              result = result + x;
            }
          });
          editor.replaceSelection(result);
        } else {
          editor.replaceSelection("<i>" + selection + "</i>");
        }
      }
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRWRpdG9yLCBQbHVnaW4gfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwidG8tY29sb3ItMlwiLFxuICAgICAgbmFtZTogXCJUbyBDb2xvciAyXCIsXG4gICAgICBlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgbGV0IHJlZ2V4X3BhdHRlcm4gPSAnKC4qKVxcPGZvbnQgc3R5bGU9XFxcImNvbG9yOnZhclxcXFwoLS10b2dnbGUtY29sb3ItMlxcXFwpXFxcIlxcPiguKilcXDwvZm9udFxcPiguKiknO1xuICAgICAgICBsZXQgZXh0cmFjdF9yZXN1bHQgPSBzZWxlY3Rpb24ubWF0Y2gocmVnZXhfcGF0dGVybik7XG5cdGlmIChleHRyYWN0X3Jlc3VsdCAhPT0gbnVsbCApXG4gICAgICAgIHtcblx0ICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgZXh0cmFjdF9yZXN1bHQuZm9yRWFjaCgoeCwgaSkgPT4ge2lmIChpIT09IDApIHtyZXN1bHQgPSByZXN1bHQgKyB4fX0pO1xuXHQgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKHJlc3VsdCk7XG5cdH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oJzxmb250IHN0eWxlPVwiY29sb3I6dmFyKC0tdG9nZ2xlLWNvbG9yLTIpXCI+JyArIHNlbGVjdGlvbiArICc8L2ZvbnQ+Jyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInRvLWNvbG9yLTFcIixcbiAgICAgIG5hbWU6IFwiVG8gQ29sb3IgMVwiLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvcikgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGxldCByZWdleF9wYXR0ZXJuID0gJyguKilcXDxmb250IHN0eWxlPVxcXCJjb2xvcjp2YXJcXFxcKC0tdG9nZ2xlLWNvbG9yLTFcXFxcKVxcXCJcXD4oLiopXFw8L2ZvbnRcXD4oLiopJztcbiAgICAgICAgbGV0IGV4dHJhY3RfcmVzdWx0ID0gc2VsZWN0aW9uLm1hdGNoKHJlZ2V4X3BhdHRlcm4pO1xuXHRpZiAoZXh0cmFjdF9yZXN1bHQgIT09IG51bGwgKVxuICAgICAgICB7XG5cdCAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgIGV4dHJhY3RfcmVzdWx0LmZvckVhY2goKHgsIGkpID0+IHtpZiAoaSE9PSAwKSB7cmVzdWx0ID0gcmVzdWx0ICsgeH19KTtcblx0ICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihyZXN1bHQpO1xuXHR9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKCc8Zm9udCBzdHlsZT1cImNvbG9yOnZhcigtLXRvZ2dsZS1jb2xvci0xKVwiPicgKyBzZWxlY3Rpb24gKyAnPC9mb250PicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJ0by1jb2xvci0zXCIsXG4gICAgICBuYW1lOiBcIlRvIENvbG9yIDNcIixcbiAgICAgIGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBsZXQgcmVnZXhfcGF0dGVybiA9ICcoLiopXFw8Zm9udCBzdHlsZT1cXFwiY29sb3I6dmFyXFxcXCgtLXRvZ2dsZS1jb2xvci0zXFxcXClcXFwiXFw+KC4qKVxcPC9mb250XFw+KC4qKSc7XG4gICAgICAgIGxldCBleHRyYWN0X3Jlc3VsdCA9IHNlbGVjdGlvbi5tYXRjaChyZWdleF9wYXR0ZXJuKTtcblx0aWYgKGV4dHJhY3RfcmVzdWx0ICE9PSBudWxsIClcbiAgICAgICAge1xuXHQgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICBleHRyYWN0X3Jlc3VsdC5mb3JFYWNoKCh4LCBpKSA9PiB7aWYgKGkhPT0gMCkge3Jlc3VsdCA9IHJlc3VsdCArIHh9fSk7XG5cdCAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24ocmVzdWx0KTtcblx0fVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbignPGZvbnQgc3R5bGU9XCJjb2xvcjp2YXIoLS10b2dnbGUtY29sb3ItMylcIj4nICsgc2VsZWN0aW9uICsgJzwvZm9udD4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwidG8tY29sb3IteFwiLFxuICAgICAgbmFtZTogXCJUbyBDb2xvciBYXCIsXG4gICAgICBlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcblx0bGV0IHJlZ2V4X3BhdHRlcm4gPSAnKC4qKVxcPGZvbnQgc3R5bGU9XFxcImNvbG9yOnZhclxcXFwoLS10b2dnbGUtY29sb3ItMVxcXFwpXFxcIlxcPiguKilcXDwvZm9udFxcPiguKiknOyAgLy8gbm90IHlldCBjYW4gZG8gdGhpcyAoLiopcmVnZXgoLiopcmVnZXgoLiopLCBjYXVzZSBzdGggYnJva2VuIGluIHRoaXMgKC4qKVxcPGZvbnQgc3R5bGU9XFxcImNvbG9yOnZhclxcKC0tdG9nZ2xlLWNvbG9yLTFcXClcXFwiXFw+KC4qKVxcPC9mb250XFw+KC4qKVxuXHRcdC8vICguKilcXDxmb250IHN0eWxlPVxcXCJjb2xvcjp2YXJcXFxcKC0tdG9nZ2xlLWNvbG9yLTFcXFxcKVxcXCJcXD4oLiopXFw8L2ZvbnRcXD4oLiopLCBuZWVkIGRvdWJsZSBcXFxcIGF0IHBhcmVudGhlc2VzLCB3aHk/XG5cbiAgICAgICAgbGV0IGV4dHJhY3RfcmVzdWx0ID0gc2VsZWN0aW9uLm1hdGNoKHJlZ2V4X3BhdHRlcm4pO1xuICAgICAgICBjb25zb2xlLmxvZyhleHRyYWN0X3Jlc3VsdClcblx0aWYgKGV4dHJhY3RfcmVzdWx0ICE9PSBudWxsIClcbiAgICAgICAge1xuXHQgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICBleHRyYWN0X3Jlc3VsdC5mb3JFYWNoKCh4LCBpKSA9PiB7aWYgKGkhPT0gMCkge3Jlc3VsdCA9IHJlc3VsdCArIHh9fSk7XG5cdCAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24ocmVzdWx0KTtcblx0fVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbignPGZvbnQgc3R5bGU9XCJjb2xvcjp2YXIoLS10b2dnbGUtY29sb3ItMSlcIj4nICsgc2VsZWN0aW9uICsgJzwvZm9udD4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwidG8tdW5kZXJsaW5lZFwiLFxuICAgICAgbmFtZTogXCJUbyBVbmRlcmxpbmVkXCIsXG4gICAgICBlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgbGV0IHJlZ2V4X3BhdHRlcm4gPSAnKC4qKVxcPHVcXD4oLiopXFw8L3VcXD4oLiopJztcbiAgICAgICAgbGV0IGV4dHJhY3RfcmVzdWx0ID0gc2VsZWN0aW9uLm1hdGNoKHJlZ2V4X3BhdHRlcm4pO1xuXHRpZiAoZXh0cmFjdF9yZXN1bHQgIT09IG51bGwgKVxuICAgICAgICB7XG5cdCAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgIGV4dHJhY3RfcmVzdWx0LmZvckVhY2goKHgsIGkpID0+IHtpZiAoaSE9PSAwKSB7cmVzdWx0ID0gcmVzdWx0ICsgeH19KTtcblx0ICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihyZXN1bHQpO1xuXHR9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKCc8dT4nICsgc2VsZWN0aW9uICsgJzwvdT4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwidG8tYm9sZFwiLFxuICAgICAgbmFtZTogXCJUbyBCb2xkXCIsXG4gICAgICBlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgbGV0IHJlZ2V4X3BhdHRlcm4gPSAnKC4qKVxcPGJcXD4oLiopXFw8L2JcXD4oLiopJztcbiAgICAgICAgbGV0IGV4dHJhY3RfcmVzdWx0ID0gc2VsZWN0aW9uLm1hdGNoKHJlZ2V4X3BhdHRlcm4pO1xuXHRpZiAoZXh0cmFjdF9yZXN1bHQgIT09IG51bGwgKVxuICAgICAgICB7XG5cdCAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgIGV4dHJhY3RfcmVzdWx0LmZvckVhY2goKHgsIGkpID0+IHtpZiAoaSE9PSAwKSB7cmVzdWx0ID0gcmVzdWx0ICsgeH19KTtcblx0ICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihyZXN1bHQpO1xuXHR9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKCc8Yj4nICsgc2VsZWN0aW9uICsgJzwvYj4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwidG8taXRhbGljXCIsXG4gICAgICBuYW1lOiBcIlRvIEl0YWxpY1wiLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvcikgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGxldCByZWdleF9wYXR0ZXJuID0gJyguKilcXDxpXFw+KC4qKVxcPC9pXFw+KC4qKSc7XG4gICAgICAgIGxldCBleHRyYWN0X3Jlc3VsdCA9IHNlbGVjdGlvbi5tYXRjaChyZWdleF9wYXR0ZXJuKTtcblx0aWYgKGV4dHJhY3RfcmVzdWx0ICE9PSBudWxsIClcbiAgICAgICAge1xuXHQgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICBleHRyYWN0X3Jlc3VsdC5mb3JFYWNoKCh4LCBpKSA9PiB7aWYgKGkhPT0gMCkge3Jlc3VsdCA9IHJlc3VsdCArIHh9fSk7XG5cdCAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24ocmVzdWx0KTtcblx0fVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbignPGk+JyArIHNlbGVjdGlvbiArICc8L2k+Jyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBK0I7QUFFL0IsSUFBcUIsZ0JBQXJCLGNBQTJDLHVCQUFPO0FBQUEsRUFDaEQsTUFBTSxTQUFTO0FBQ2IsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsQ0FBQyxXQUFtQjtBQUNsQyxjQUFNLFlBQVksT0FBTyxhQUFhO0FBQ3RDLFlBQUksZ0JBQWdCO0FBQ3BCLFlBQUksaUJBQWlCLFVBQVUsTUFBTSxhQUFhO0FBQ3pELFlBQUksbUJBQW1CLE1BQ2hCO0FBQ0wsY0FBSSxTQUFTO0FBQ04seUJBQWUsUUFBUSxDQUFDLEdBQUcsTUFBTTtBQUFDLGdCQUFJLE1BQUssR0FBRztBQUFDLHVCQUFTLFNBQVM7QUFBQSxZQUFDO0FBQUEsVUFBQyxDQUFDO0FBQzNFLGlCQUFPLGlCQUFpQixNQUFNO0FBQUEsUUFDaEMsT0FFTztBQUNFLGlCQUFPLGlCQUFpQiwrQ0FBK0MsWUFBWSxTQUFTO0FBQUEsUUFDOUY7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQ0QsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsQ0FBQyxXQUFtQjtBQUNsQyxjQUFNLFlBQVksT0FBTyxhQUFhO0FBQ3RDLFlBQUksZ0JBQWdCO0FBQ3BCLFlBQUksaUJBQWlCLFVBQVUsTUFBTSxhQUFhO0FBQ3pELFlBQUksbUJBQW1CLE1BQ2hCO0FBQ0wsY0FBSSxTQUFTO0FBQ04seUJBQWUsUUFBUSxDQUFDLEdBQUcsTUFBTTtBQUFDLGdCQUFJLE1BQUssR0FBRztBQUFDLHVCQUFTLFNBQVM7QUFBQSxZQUFDO0FBQUEsVUFBQyxDQUFDO0FBQzNFLGlCQUFPLGlCQUFpQixNQUFNO0FBQUEsUUFDaEMsT0FFTztBQUNFLGlCQUFPLGlCQUFpQiwrQ0FBK0MsWUFBWSxTQUFTO0FBQUEsUUFDOUY7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQ0QsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsQ0FBQyxXQUFtQjtBQUNsQyxjQUFNLFlBQVksT0FBTyxhQUFhO0FBQ3RDLFlBQUksZ0JBQWdCO0FBQ3BCLFlBQUksaUJBQWlCLFVBQVUsTUFBTSxhQUFhO0FBQ3pELFlBQUksbUJBQW1CLE1BQ2hCO0FBQ0wsY0FBSSxTQUFTO0FBQ04seUJBQWUsUUFBUSxDQUFDLEdBQUcsTUFBTTtBQUFDLGdCQUFJLE1BQUssR0FBRztBQUFDLHVCQUFTLFNBQVM7QUFBQSxZQUFDO0FBQUEsVUFBQyxDQUFDO0FBQzNFLGlCQUFPLGlCQUFpQixNQUFNO0FBQUEsUUFDaEMsT0FFTztBQUNFLGlCQUFPLGlCQUFpQiwrQ0FBK0MsWUFBWSxTQUFTO0FBQUEsUUFDOUY7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQ0QsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsQ0FBQyxXQUFtQjtBQUNsQyxjQUFNLFlBQVksT0FBTyxhQUFhO0FBQzdDLFlBQUksZ0JBQWdCO0FBR2IsWUFBSSxpQkFBaUIsVUFBVSxNQUFNLGFBQWE7QUFDbEQsZ0JBQVEsSUFBSSxjQUFjO0FBQ2pDLFlBQUksbUJBQW1CLE1BQ2hCO0FBQ0wsY0FBSSxTQUFTO0FBQ04seUJBQWUsUUFBUSxDQUFDLEdBQUcsTUFBTTtBQUFDLGdCQUFJLE1BQUssR0FBRztBQUFDLHVCQUFTLFNBQVM7QUFBQSxZQUFDO0FBQUEsVUFBQyxDQUFDO0FBQzNFLGlCQUFPLGlCQUFpQixNQUFNO0FBQUEsUUFDaEMsT0FFTztBQUNFLGlCQUFPLGlCQUFpQiwrQ0FBK0MsWUFBWSxTQUFTO0FBQUEsUUFDOUY7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQ0QsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsQ0FBQyxXQUFtQjtBQUNsQyxjQUFNLFlBQVksT0FBTyxhQUFhO0FBQ3RDLFlBQUksZ0JBQWdCO0FBQ3BCLFlBQUksaUJBQWlCLFVBQVUsTUFBTSxhQUFhO0FBQ3pELFlBQUksbUJBQW1CLE1BQ2hCO0FBQ0wsY0FBSSxTQUFTO0FBQ04seUJBQWUsUUFBUSxDQUFDLEdBQUcsTUFBTTtBQUFDLGdCQUFJLE1BQUssR0FBRztBQUFDLHVCQUFTLFNBQVM7QUFBQSxZQUFDO0FBQUEsVUFBQyxDQUFDO0FBQzNFLGlCQUFPLGlCQUFpQixNQUFNO0FBQUEsUUFDaEMsT0FFTztBQUNFLGlCQUFPLGlCQUFpQixRQUFRLFlBQVksTUFBTTtBQUFBLFFBQ3BEO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUNELFNBQUssV0FBVztBQUFBLE1BQ2QsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sZ0JBQWdCLENBQUMsV0FBbUI7QUFDbEMsY0FBTSxZQUFZLE9BQU8sYUFBYTtBQUN0QyxZQUFJLGdCQUFnQjtBQUNwQixZQUFJLGlCQUFpQixVQUFVLE1BQU0sYUFBYTtBQUN6RCxZQUFJLG1CQUFtQixNQUNoQjtBQUNMLGNBQUksU0FBUztBQUNOLHlCQUFlLFFBQVEsQ0FBQyxHQUFHLE1BQU07QUFBQyxnQkFBSSxNQUFLLEdBQUc7QUFBQyx1QkFBUyxTQUFTO0FBQUEsWUFBQztBQUFBLFVBQUMsQ0FBQztBQUMzRSxpQkFBTyxpQkFBaUIsTUFBTTtBQUFBLFFBQ2hDLE9BRU87QUFDRSxpQkFBTyxpQkFBaUIsUUFBUSxZQUFZLE1BQU07QUFBQSxRQUNwRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFDRCxTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLGdCQUFnQixDQUFDLFdBQW1CO0FBQ2xDLGNBQU0sWUFBWSxPQUFPLGFBQWE7QUFDdEMsWUFBSSxnQkFBZ0I7QUFDcEIsWUFBSSxpQkFBaUIsVUFBVSxNQUFNLGFBQWE7QUFDekQsWUFBSSxtQkFBbUIsTUFDaEI7QUFDTCxjQUFJLFNBQVM7QUFDTix5QkFBZSxRQUFRLENBQUMsR0FBRyxNQUFNO0FBQUMsZ0JBQUksTUFBSyxHQUFHO0FBQUMsdUJBQVMsU0FBUztBQUFBLFlBQUM7QUFBQSxVQUFDLENBQUM7QUFDM0UsaUJBQU8saUJBQWlCLE1BQU07QUFBQSxRQUNoQyxPQUVPO0FBQ0UsaUJBQU8saUJBQWlCLFFBQVEsWUFBWSxNQUFNO0FBQUEsUUFDcEQ7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
