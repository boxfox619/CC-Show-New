import AssetModel from 'src/models/AssetModel';

export default interface AssetProps {
    data: AssetModel,
    isSelected: boolean,
    isDoubleClicked: boolean,
    controllable: boolean,
    onValueChange: (value: any) => void
}