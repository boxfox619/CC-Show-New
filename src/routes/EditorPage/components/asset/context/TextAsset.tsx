import * as React from 'react';

declare let CKEDITOR: any;

interface OwnProps {
    assetId: any,
    controllable: boolean,
    value: string,
    isSelected: boolean,
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
export default class TextAsset extends React.Component<Props>{
    editorRef: React.RefObject<HTMLDivElement>;
    constructor(props: Props){
        super(props);
        this.editorRef = React.createRef();
    }

    public render() {
        const { assetId, controllable, isSelected, value, handleChange, ...divProps } = this.props;
        return (
            <div ref={this.editorRef}
                {...divProps}
                style={{...divProps, outline: 'none'}}
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

    componentDidUpdate(nextProps: Props) {
        const element = this.editorRef.current;
        if(!element){
            return;
        }
        if (nextProps.isSelected) {
            element.focus();
        } else {
            element.blur();
        }
        return nextProps.value !== element.innerHTML || nextProps.isSelected !== this.props.isSelected;
    }

    get id() {
        return `text-asset-${this.props.assetId}`
    }
}