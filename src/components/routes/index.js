import { Html5Outlined } from '@ant-design/icons'
import CSSPage from '../../Pages/CSS'
import HomePage from '../../Pages/HomePage'
import ListsPage from '../../Pages/HTML/ListsPage'
import TablesPage from '../../Pages/HTML/TablesPage'
import TitlesPage from '../../Pages/HTML/TitlesPage'
import JavascriptPage from '../../Pages/JS'
import SpanPage from '../../Pages/HTML/Paragraphs/SpanPage'
import StrikePage from '../../Pages/HTML/Paragraphs/StrikePage'
import StrongPage from '../../Pages/HTML/Paragraphs/StrongPage'
import ParagraphPage from '../../Pages/HTML/Paragraphs/ParagraphPage'
import Paragraphs from '../../Pages/HTML/Paragraphs'
import ImagePage from '../../Pages/HTML/ImagePage'
import AttributesPage from '../../Pages/HTML/AttributesPage'
import FormPage from '../../Pages/HTML/FormPage'

export const routesList = [
  {
    path: '/html',
    icon: Html5Outlined,
    label: 'HTML',
    pageComponent: HomePage,
    childs: [
      {
        path: '/html/attributes',
        label: 'Atributos',
        pageComponent: AttributesPage,
      },
      {
        path: '/html/titles',
        label: 'Titulos',
        pageComponent: TitlesPage,
      },
      {
        path: '/html/lists',
        label: 'Listas',
        pageComponent: ListsPage,
      },
      {
        path: '/html/paragraph',
        label: 'Parrafos',
        pageComponent: Paragraphs,
        subChilds: [
          {
            path: '/html/paragraph/parrafo',
            label: 'Parrafo',
            pageComponent: ParagraphPage,
          },
          {
            path: '/html/paragraph/span',
            label: 'Extendido',
            pageComponent: SpanPage,
          },
          {
            path: '/html/paragraph/strong',
            label: 'Negrita',
            pageComponent: StrongPage,
          },
          {
            path: '/html/paragraph/strike',
            label: 'Tachado',
            pageComponent: StrikePage,
          },
        ],
      },
      {
        path: '/html/table',
        label: 'Tabla',
        pageComponent: TablesPage,
      },
      {
        path: '/html/image',
        label: 'Imagen',
        pageComponent: ImagePage,
      },
      {
        path: '/html/form',
        label: 'Formularios',
        pageComponent: FormPage,
      }
    ],
  },
  {
    path: '/css',
    icon: {
      className: 'fab fa-css3-alt',
      style: {
        fontSize: '18px',
        paddingInline: '2px',
      },
    },
    label: 'CSS',
    pageComponent: CSSPage,
  },
  {
    path: '/javascript',
    icon: {
      className: 'fab fa-js-square',
      style: {
        fontSize: '16px',
        paddingInline: '2px',
      },
    },
    label: 'JavaScript',
    pageComponent: JavascriptPage,
  },
]
