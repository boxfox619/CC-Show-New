import AssetModel from 'src/core/models/AssetModel';

export default interface AssetProps {
    data: AssetModel,
    isSelected: boolean,
    controllable: boolean,
    onValueChange: (value: any) => void
}