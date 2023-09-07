import React, { useEffect, useState } from "react";

import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'

import config from "./config";

const GrapeInput = (props) => {
    const [editor, setEditor] = useState(null);
    console.info();

    const GrapeStoragePlugin = (currentEditor) => {
        currentEditor.Storage.add('grape', {
            async load(options = {}) {
                return props.value ? JSON.parse(props.value).grapesjsData : {};
            },
        
            async store(data, options = {}) {
                const component = currentEditor.Pages.getSelected().getMainComponent();
                const html = currentEditor.getHtml({ component });
                const style = currentEditor.getCss({ component });
                const js = currentEditor.getJs({ component });
                props.onChange({
                    target: {
                        name: props.name,
                        value: JSON.stringify({
                            html,
                            style,
                            js,
                            grapesjsData: data
                        }),
                        type: "json"
                    }
                });
            }
        });
    };

    useEffect(() => {
        config.plugins.push(GrapeStoragePlugin);
        config.storageManager = {
            type: 'grape'
        };
        const grapeEditor = grapesjs.init(config);
        setEditor(grapeEditor)
    }, []);

    return (
        <div id="gjs"></div>
    );
};

export default GrapeInput;