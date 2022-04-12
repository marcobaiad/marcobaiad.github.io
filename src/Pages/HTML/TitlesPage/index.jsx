import PreCode from '../../../components/PreCode'

const TitlesPage = () => {
  return (
    <div>
      <h2>Títulos en HTML</h2>
      <p>Existen 6 tipos de titulos en HTML:</p>
      <PreCode element="h1" value="Este es un título principal" />
      <PreCode element="h2" value="Este es un subtítulo de nivel 2" />
      <PreCode element="h3" value="Este es un subtítulo de nivel 3" />
      <PreCode element="h4" value="Este es un subtitulo de nivel 4" />
      <PreCode element="h5" value="Este es un subtítulo de nivel 5" />
      <PreCode element="h6" value="Este es un subtítulo de nivel 6" />
      <p>
        Se debe tener en cuenta que una página web solo debe contener{' '}
        <strong>UN</strong> titulo primario <strong>h1</strong>, y el resto
        debería ser escrito en subtitulos
      </p>
    </div>
  )
}

export default TitlesPage
