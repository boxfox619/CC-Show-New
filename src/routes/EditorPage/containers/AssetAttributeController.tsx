import * as React from "react";
import styled from 'styled-components';
import { AssetModel } from "src/models";
import BasicContainer from '../components/attribute-controller/BasicController';

const Container = styled.div`
  width: 300px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
`

interface Props {
  asset?: AssetModel;
}

const AssetAttributeController: React.FC<Props> = ({ asset }) => {
  return (
    <Container>
      {/*       <BasicController
        width={asset.width}
        height={asset.height}
        x={asset.position.x}
        y={asset.position.y}
        angle={asset.attr.angle}
        style={asset.style}
      /> */}
      <BasicContainer
        width={30}
        height={30}
        x={30}
        y={30}
        angle={30}
        style={{ background: 'red' }}
      />
    </Container>
  );
};
export default AssetAttributeController;