import * as React from "react";

interface AsyncComponentState{
    ImportedComponent: any;
}

export default function asyncComponent(getComponent: () => Promise<any>): any {
    class AsyncComponent extends React.Component<{},AsyncComponentState> {

        constructor(props: any) {
            super(props);
            this.state = {
                ImportedComponent: null
            }
        }

        async componentDidMount(){
            const result: any = await getComponent();
            const component = result.default;
            this.setState({
                ImportedComponent: component
            });
        }

        render() {
            const {ImportedComponent} = this.state;
            return ImportedComponent ? (<ImportedComponent {...this.props}/>) : (<div>....Loading</div>)
        }
    }
    return AsyncComponent;
}