import { Asset } from 'src/models/asset';

export default interface AssetProps {
    data: Asset,
    isSelected: boolean,
    isDoubleClicked: boolean,
    controllable: boolean,
    onValueChange: (value: any) => void
}