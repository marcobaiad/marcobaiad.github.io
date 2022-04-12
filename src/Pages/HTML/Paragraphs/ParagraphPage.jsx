import { Divider } from 'antd'
import Title from 'antd/lib/typography/Title'
import PreCode from '../../../components/PreCode'

const ParagraphPage = () => {
  return (
    <>
      <Title level={2}>Parrafos</Title>
      <p>
        El elemento parrafo es uno de los elementos HTML más utilizados. Su
        sintaxis es la siguiente:
      </p>
      <PreCode element="p" value="Este es un parrafo" />
      <Divider />
      <Title level={3}>Resultado</Title>
      <p>Este es un parrafo</p>
    </>
  )
}

export default ParagraphPage
