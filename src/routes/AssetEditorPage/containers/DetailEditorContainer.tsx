import * as React from 'react';
import styled from 'styled-components';
import { ThumbnailInput } from '../components/ThumbnailInput';
import { StoreModel } from '../models';
import { setThumbnail, setPublic } from '../reducers';
import { connect } from 'react-redux';
import { ToggleInput } from '../components/ToggleInput';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  display: flex;
  flex-flow: row;
  padding: 20px;
  @media(max-width: 900px) {
    flex-flow: column;
  }
`
const Title = styled.p`
  color: #898989;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px
`
const Input = styled.input`
  border: solid 1px #898989;
  padding: 11px;
  font-size: 18px;
  margin-bottom: 25px;
  width: calc(100% - 22px);
`
const Thumbnail = styled(ThumbnailInput)`
  flex: 1;
  margin-right: 10px;
  height: 450px;
  margin-bottom: 20px;
  max-width: 900px;
`
const FormContainer = styled.div`
  flex: 1;
`

const mapDispatchToProps = {
  setThumbnail,
  setPublic
};

const mapStateToProps = (state: StoreModel) => {
  return {
    auth: state.auth,
    thumbnail: state.assetEditor.thumbnail
  }
};

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & React.HTMLAttributes<HTMLDivElement>;

const DetailEditorContainer: React.FC<Props> = ({ setThumbnail, setPublic, thumbnail, }) => {
  const handlePublic = React.useCallback((mode: string) => setPublic(mode === '공개'), [setPublic]);
  return (
    <Container>
      <Thumbnail defaultThumbnail={thumbnail} onThumbnailChange={setThumbnail} />
      <FormContainer>
        <Title>타이틀</Title>
        <Input placeholder="텍스트를 입력하세요" />
        <Title>가격</Title>
        <Input placeholder="가격을 입력하세요" />
        <Title>스토어 공개범위</Title>
        <ToggleInput items={['공개', '비공개']} onChange={handlePublic} />
      </FormContainer>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailEditorContainer);
