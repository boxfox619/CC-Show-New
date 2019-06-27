import * as React from 'react';
import styled from 'styled-components';

const EditorContainer = styled.div`
    height: 100%;
    overflow: hidden;
    outline: none;
`

declare let CKEDITOR: any;

interface OwnProps {
    assetId: any,
    controllable: boolean,
    value: string,
    editing: boolean,
    handleChange: (value: string) => void
}
type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

const config = {
    toolbar: [
        { name: 'styles', items: ['Font', 'FontSize'] },
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike'] },
        { name: 'paragraph', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] }
    ]
};

export default class TextAssetView extends React.Component<Props>{
    editorRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props){
        super(props);
        this.editorRef = React.createRef();
    }

    public render() {
        const { assetId, controllable, editing, value, handleChange, ...divProps } = this.props;
        return (
            <EditorContainer ref={this.editorRef}
                {...divProps}
                contentEditable={controllable}
                dangerouslySetInnerHTML={{ __html: value }}
                id={this.id}
            />
        )
    }

    componentDidMount() {
        const { controllable, handleChange } = this.props;
        if (controllable && typeof CKEDITOR !== "undefined") {
            const instance = CKEDITOR.inline(this.id, config);
            const changeHandler = () => {
                const data = instance.getData();
                handleChange(data);
            };
            instance.on("change", changeHandler);
            CKEDITOR.on("instanceReady", (ck: any) => {
                ck.editor.removeMenuItem("paste");
            });
            CKEDITOR.disableAutoInline = true;
        }
    }

    shouldComponentUpdate(nextProps: Props) {
        const element = this.editorRef.current;
        if(!element){
            return false;
        }
        if (nextProps.editing) {
            element.focus();
        } else {
            element.blur();
        }
        const instance = CKEDITOR.instances[this.id];
        const data = instance.getData();
        return nextProps.value !== data || nextProps.editing !== this.props.editing;
      }

    get id() {
        return `text-asset-${this.props.assetId}`
    }
}