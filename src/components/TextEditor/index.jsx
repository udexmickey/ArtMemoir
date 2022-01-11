import React, { useState } from "react";
import "./texteditor.scss";

import { Editor } from '@tinymce/tinymce-react'

const TextEditor = (props)=> {

    const [content, setContent] = useState(props.data)

    return (
        <div className="text-editor">
            <form onSubmit={this.handleSubmit}>
                <h2>Message</h2>
                <div>{content}</div>
                
                <Editor
                apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                value={content}
                init={{
                    height: 200,
                    menubar: false
                }}
                // onEditorChange={this.handleChange}
                onChange={opts => setContent(opts.content)}
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>

    );
  
}

export default TextEditor;
