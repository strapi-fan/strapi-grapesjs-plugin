import React, { useCallback, useEffect, useRef, useState } from "react";

import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'

import config from "./config";

const GrapeInput = (props) => {
    const [editor, setEditor] = useState(null);
    console.info("props", props);

    useEffect(() => {
        const grapeEditor = grapesjs.init(config);
        console.info("grapeEditor", grapeEditor);
        console.info("config", config);
        setEditor(grapeEditor)
    }, []);

    useEffect(() => {
        if (editor) {
            editor.on("update", () => {
                console.info("editor", editor.getHtml());
                // props.onChange();
            });
        }
    }, [editor]);

    return (
        <div id="gjs"></div>
    );
};

export default GrapeInput;