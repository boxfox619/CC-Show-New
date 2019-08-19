import * as React from 'react';
import { CustomAssetData } from '@/models';

interface Props {
  data: CustomAssetData
}

export const CustomAssetView: React.FC<Props> = ({ data }) => {
  const pureSource = React.useMemo(() => {
    return `
      <html>${data.html}</html>
      <style>${data.css}</style>
      <javascript>${data.javascript}</javascript>
    `
  }, [data]);
  return (
    <div dangerouslySetInnerHTML={{ __html: pureSource }} />
  )
}