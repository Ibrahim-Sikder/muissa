import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
    ["code-block"],
    ["image"],
    ["video"],
  ],
};

const formats = [
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "clean",
];

interface AppRichTextProps {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
}

const RichtextEditor = ({
  name,
  label,
  required,
  placeholder,
}: AppRichTextProps) => {
  const { control } = useFormContext();
  const [editorValue, setEditorValue] = useState<string>("");

  useEffect(() => {
    if (editorValue === null || editorValue === undefined) {
      setEditorValue("");
    }
  }, [editorValue]);

  return (
    <div style={{ marginBottom: "10px" }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <label>{label}</label>
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={editorValue || field.value || ""}
              onChange={(value) => {
                setEditorValue(value);
                field.onChange(value);
              }}
              placeholder={placeholder}
            />
            {error && <p style={{ color: "red" }}>{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default RichtextEditor;
