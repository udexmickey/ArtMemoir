import React, { useState } from "react";
import "./texteditor.scss";

import { Editor } from '@tinymce/tinymce-react'

const TextEditor = (props)=> {

    const [content, setContent] = useState('test')

    const handleSubmit = (e)=> {
        e.preventDefault();
        setContent(content)
        // console.log(content);
        // return
        alert("Text was submitted: " + content);
    }
    

    return (
        <div className="text-editor">
            <form onSubmit={handleSubmit}>
                <h2>Message</h2>
                <div>{content}</div>
                
                <Editor
                apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                // value={content}
                init={{
                    height: 200,
                    menubar: false
                }}
                onEditorChange={opts => { setContent()}}
                // onChange={opts =>(){setContent(content)}}
                value={content}
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <pre>{content}</pre>
        </div>

    );

//     const [value, setValue] = useState('<p>The quick brown fox jumps over the lazy dog</p>');
// const [text, setText] = useState('');

// return (
//     <div className="text-editor">
//     <Editor
//       value={value}
//       onInit={(evt, editor) => {
//         setText(editor.getContent({format: 'text'}));
//       }}
//       onEditorChange={(newValue, editor) => {
//         setValue(newValue);
//         setText(editor.getContent({format: 'text'}));
//       }}
//     />
//     <pre>{text}</pre>
//   </div>
// );
  
}

export default TextEditor;
