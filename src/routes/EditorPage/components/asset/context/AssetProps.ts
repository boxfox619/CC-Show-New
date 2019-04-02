import AssetModel from 'src/core/models/AssetModel';

export default interface AssetProps {
    data: AssetModel,
    controllable: boolean,
    onValueChange: (value: any) => void
}