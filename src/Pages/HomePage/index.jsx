import { Outlet } from 'react-router-dom'
import Title from 'antd/lib/typography/Title'

const HomePage = () => {
  return (
    <>
      <Title>Fundamentos HTML</Title>
      <p>
        Del inglés HyperText Markup Language. Define el significado y la
        estructura del contenido web.
      </p>
      <p>
        Un elemento HTML se distingue de otro texto en un documento mediante
        &quot;etiquetas&quot;, que consisten en el nombre del elemento rodeado
        por &lt;elemento&gt;. El nombre de un elemento dentro de una etiqueta no
        distingue entre mayúsculas y minúsculas. Es decir, se puede escribir en
        mayúsculas, minúsculas o una mezcla. Por ejemplo, la etiqueta
        &lt;title&gt; se puede escribir como &lt;Title&gt;, &lt;TITLE&gt; o de
        cualquier otra forma.
      </p>
      <Outlet />
    </>
  )
}

export default HomePage
