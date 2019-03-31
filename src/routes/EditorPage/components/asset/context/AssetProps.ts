import AssetModel from 'src/core/models/AssetModel';

export default interface AssetProps {
    data: AssetModel,
    controlable: boolean,
    onValueChange: (value: any) => void
}