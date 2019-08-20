import { Asset } from '../../models';

export default interface AssetProps<T extends Asset<any>> {
    data: T,
    isSelected: boolean,
    isDoubleClicked: boolean,
    controllable: boolean,
    onValueChange: (value: any) => void
}