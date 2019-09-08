import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  & > *:not(:first-child) {
    margin-left: 10px;
  }
`
const Item = styled.div`
  text-align: center;
  flex: 1;
  padding: 10px;
  border: solid 1px #898989;
  cursor: pointer;
  ${(props: { active?: boolean }) => props.active && `
    color: white;
    background-color: #898989;
  `}
`

interface Props {
  items: string[],
  defaultValue?: string,
  onChange: (item: string) => void
}

export const ToggleInput: React.FC<Props> = ({ items, defaultValue, onChange }) => {
  const [value, setValue] = React.useState((!!defaultValue) ? defaultValue : items[0]);
  const handleClick = React.useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (!!target.dataset.id) {
      onChange(target.dataset.id);
      setValue(target.dataset.id);
    }
  }, [onChange, setValue]);
  return (
    <Container onClick={handleClick}>
      {items.map(item => <Item key={item} data-id={item} active={value === item}>{item}</Item>)}
    </Container>
  )
}