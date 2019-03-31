import * as React from 'react';
import {useState, useEffect} from 'react';
import AssetProps from './AssetProps';

export const TextAsset: React.FC<AssetProps> = (props: AssetProps) => {
    const id = props.data.id+'-text';
    const [inited, setInited] = useState(false);
    useEffect(() => {
        if(inited){
            return;
        }

        let config = {
            toolbar: [
                {name: 'styles', items: ['Font', 'FontSize']},
                {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike']},
                {name: 'paragraph', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']},
                {name: 'colors', items: ['TextColor', 'BGColor']}
            ]
        };
      if (props.controlable && typeof CKEDITOR !== 'undefined') {
        let instance = CKEDITOR.inline(id, config);
        instance.on('change', function () {
          let data = instance.getData();
          props.onValueChange(data);
        });
        CKEDITOR.on('instanceReady', function(ck) { ck.editor.removeMenuItem('paste'); });
        CKEDITOR.disableAutoInline = true;
      }
      setInited(true);
    })    

    return (
        <div
        contentEditable={props.controlable}
        dangerouslySetInnerHTML={{__html: props.data.value}}
        id={id}
        /* name={props.data.id} */
        style={{...props.data.style}}
      />
    )
}