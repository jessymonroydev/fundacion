import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import LaArmadura from './page/LaArmadura'
import ElAbuso from './page/ElAbuso'
import ElAmor from './page/ElAmor'
import ElInfierno from './page/ElInfierno'
import ElMundo from './page/ElMundo'
import LaIdolatria from './page/LaIdolatria'
import LaInmoralidad from './page/LaInmoralidad'
import NacerDeNuevo from './page/NacerDeNuevo'
import ReinoDeLosCielos from './page/ReinoDeLosCielos'
import SatanasEsReal from './page/SatanasEsReal'
import VideosElAbuso from './page/VideosElAbuso'
import VideosElAmor from './page/VideosElAmor'
import VideosElInfierno from './page/VideosElInfierno'
import VideosElMundo from './page/VideosElMundo'
import VideosLaIdolatria from './page/VideosLaIdolatria'
import VideosLaInmoralidad from './page/LaInmoralidad'
import VideosNacerDeNuevo from './page/VideosNacerDeNuevo'
import VideosReinoDeLosCielos from './page/VideosReinoDeLosCielos'
import VideosSatanasEsReal from './page/VideosSatanasEsReal'
import VideosLaArmadura from './page/VideosLaArmadura'
import Investiganos from './page/Investiganos'
import Historia from './page/Historia'
import Proyectos from './page/subPage/Proyectos'
import Contenido from './page/subPage/Contenido'
import EscuelaDePadres from './page/subPage/EscuelaDePadres'
import MadresTriunfadoras from './page/subPage/MadresTriunfadoras'
import Enfoque from './page/subPage/Enfoque'
import ComoEducar from './page/subPage/ComoEducar'
import Folletos from './page/subPage/Folletos'
import Periodicos from './page/subPage/Periodicos'
import Concursos from './page/subPage/Concursos'
import Unete from './page/subPage/Unete'
import ElCelular from './page/ElCelular'
import VideosElCelular from './page/VideosElCelular'
import VideosElCastigo from './page/VideosElCastigo'
import VideosReinoDeLosCielosInicio from './page/VideosReinoDeLosCielosInicio'
import VideosLaCreacion from './page/VideosLaCreacion'
import FolletoCursoParaCapacitadores from './page/subPage/FolletoCursoParaCapacitadores'
import FolletoComoAyudarATusHijos from './page/subPage/FolletoComoAyudarASusHijos'
import FolletoJesucristo from './page/subPage/FolletoJesucristo'
import FolletoLaPrevencion from './page/subPage/FolletoLaPrevencion'
import FolletoLaArmaduraDeDios from './page/subPage/FolletoLaArmaduraDeDios'
import FolletoLibretos from './page/subPage/FolletoLibretos'
import ConcursoCanciones from './page/ConcursoCanciones'
import ConcursoMemoria from './page/ConcursoMemoria'
import BibliaInfantil from './page/subPage/BibliaInfantil'
import JuegosSuperLibro from './page/subPage/JuegosSuperLibro'
import ParaColorearYMemorizar from './page/subPage/ParaColorearYMeemorizar'
import ParaColorearElReinoDeLosCielos from './page/subPage/ParaColorearElReinoDeLosCielos'
import FamiliasDelReinoAnimal from './page/subPage/FamiliasDelReinoAnimal'
import DiaDelNiñoParaColorear from './page/subPage/DiaDelNiñoParaColorear'
import CartelesSobreValores from './page/subPage/CartelesSobreValores'
import CarteleraPatios from './page/subPage/CarteleraPatios'
import LaArmaduraDeDiosImprimir from './page/subPage/LaArmaduraDeDiosImprimir'
import VideosPromuevenValores from './page/VideosPromuevesValores'
import VideosPequeñosHeroes from './page/VideosPequeñosHeroes'
import VideosHistoriasBiblicasPequeñosHeroes from './page/VideosHistoriasBiblicasPequeñosHeroes'
import VideosCancionesVersiculosMemorizar from './page/VideosCancionesVersiculosMemorizar'
import FolletoUnaNiñezConPropositoDeDios from './page/subPage/FolletoUnaNiñezConPropositoDeDios'
import VideosUnaNiñezConPropositoDeDios from './page/videosUnaNiñezConPropositoDeDios'
import VideosDePablitoElMisionero from './page/VideosDePablitoElMisionero'
import VideosSuperLibro from './page/VideosSuperLibro'
import VideosVersiculosParaMemorizar from './page/VideosVersiculosParaMemorizar'
import AprendeSobreJesus from './page/AprendeSobreJesus'
import TestimoniosExBrujos from './page/TestimoniosExBrujos'
import TestimoniosExHomosexuales from './page/TestimoniosExHomosexuales'
import TestimoniosExLesbianas from './page/TestimoniosExLesbianas'
import TestimoniosExProstitutas from './page/TestimoniosExProstitutas'
import TestimoniosExSicarios from './page/TestimoniosExSicarios'
import TestimoniosExTransgenero from './page/TestimoniosExTransgenero'
import Fundador from './page/Fundador'
import InformacionCorporativa from './page/InformacionCorporativa'
import Apadrinamiento from './page/Apadrinamiento'
import Halloween from './page/Halloween'
import Ouija from './page/Ouija'
import CaricaturasPeligrosas from './page/CaricaturasPeligrosas'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/la-armadura-de-dios' element={<LaArmadura />} />
        <Route path='/videos-la-armadura-de-dios' element={<VideosLaArmadura />} />
        <Route path='/el-reino-de-los-cielos' element={<ReinoDeLosCielos />} />
        <Route path='/videos-el-reino-de-los-cielos' element={<VideosReinoDeLosCielos />} />
        <Route path='/el-amor' element={<ElAmor />} />
        <Route path='/videos-el-amor' element={<VideosElAmor />} />
        <Route path='/nacer-de-nuevo' element={<NacerDeNuevo />} />
        <Route path='/videos-nacer-de-nuevo' element={<VideosNacerDeNuevo />} />
        <Route path='/el-mundo-y-sus-tendencias' element={<ElMundo />} />
        <Route path='/videos-el-mundo-y-sus-tendencias' element={<VideosElMundo />} />
        <Route path='/la-inmoralidad' element={<LaInmoralidad />} />
        <Route path='/videos-la-inmoralidad' element={<VideosLaInmoralidad />} />
        <Route path='/el-abuso' element={<ElAbuso />} />
        <Route path='/videos-el-abuso' element={<VideosElAbuso />} />
        <Route path='/la-idolatria' element={<LaIdolatria />} />
        <Route path='/videos-la-idolatria' element={<VideosLaIdolatria />} />
        <Route path='/satanas-es-real' element={<SatanasEsReal />} />
        <Route path='/videos-satanas-es-real' element={<VideosSatanasEsReal />} />
        <Route path='/el-infierno' element={<ElInfierno />} />
        <Route path='/videos-el-infierno' element={<VideosElInfierno />} />
        <Route path='/el-celular' element={<ElCelular />} />
        <Route path='/videos-el-celular' element={<VideosElCelular />} />
        <Route path='/investiganos' element={<Investiganos />} />
        <Route path='/historia' element={<Historia />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/contenido' element={<Contenido />} />
        <Route path='/escuela-para-padres' element={<EscuelaDePadres />} />
        <Route path='/madres-triunfadoras' element={<MadresTriunfadoras />} />
        <Route path='/enfoque-a-la-familia' element={<Enfoque />} />
        <Route path='/como-educar' element={<ComoEducar />} />
        <Route path='/folletos' element={<Folletos />} />
        <Route path='/periodicos' element={<Periodicos />} />
        <Route path='/consursos' element={<Concursos />} />
        <Route path='/unete' element={<Unete />} />
        <Route path='/videos-el-castigo' element={<VideosElCastigo />} />
        <Route path='/videos-reino-de-los-cielos-inicio' element={<VideosReinoDeLosCielosInicio />} />
        <Route path='/videos-la-creacion' element={<VideosLaCreacion />} />
        <Route path='/folleto-curso-para-capacitadores' element={<FolletoCursoParaCapacitadores />} />   
        <Route path='/folleto-como-ayudar-a-sus-hijos' element={<FolletoComoAyudarATusHijos />} />
        <Route path='/folleto-jesucristo' element={<FolletoJesucristo />} />
        <Route path='/folleto-la-prevencion' element={<FolletoLaPrevencion />} />
        <Route path='/folleto-la-armadura-de-dios' element={<FolletoLaArmaduraDeDios />} />
        <Route path='/folleto-libretos' element={<FolletoLibretos />} /> 
        <Route path='/concurso-canciones' element={<ConcursoCanciones />} /> 
        <Route path='/concurso-memoria' element={<ConcursoMemoria />} />     
        <Route path='/biblia-infantil' element={<BibliaInfantil />} /> 
        <Route path='/juegos-super-libro' element={<JuegosSuperLibro />} />
        <Route path='/para-colorear-y-memorizar' element={<ParaColorearYMemorizar />} />
        <Route path='/para-colorear-el-reino-de-los-cielos' element={<ParaColorearElReinoDeLosCielos />} />
        <Route path='/familias-del-reino-animal' element={<FamiliasDelReinoAnimal />} />
        <Route path='/dia-del-nino-para-colorear' element={<DiaDelNiñoParaColorear />} />
        <Route path='/cartelera-sobre-valores-para-imprimir' element={<CartelesSobreValores />} />
        <Route path='/cartelera-patios-para-imprimir' element={<CarteleraPatios />} />
        <Route path='/la-armadura-de-dios-para-imprimir-y-recortar' element={<LaArmaduraDeDiosImprimir />} />
        <Route path='/videos-que-promueven-valores' element={<VideosPromuevenValores />} />
        <Route path='/videos-canciones-biblicas-pequenos-heroes' element={<VideosPequeñosHeroes />} />
        <Route path='/videos-historias-biblicas-pequenos-heroes' element={<VideosHistoriasBiblicasPequeñosHeroes />} />
        <Route path='/memorizando-versiculos' element={<VideosCancionesVersiculosMemorizar />} />
        <Route path='/folleto-una-ninez-con-el-proposito-de-dios' element={<FolletoUnaNiñezConPropositoDeDios />} />
        <Route path='/videos-una-ninez-con-el-proposito-de-dios' element={<VideosUnaNiñezConPropositoDeDios />} />
        <Route path='/videos-de-pablito-el-pequeno-misionero' element={<VideosDePablitoElMisionero />} />
        <Route path='/videos-el-superlibro' element={<VideosSuperLibro/>} />
        <Route path='/videos-versiculos-para-memorizar' element={<VideosVersiculosParaMemorizar/>} />
        <Route path='/aprende-sobre-jesus' element={<AprendeSobreJesus/>} />
        <Route path='/testimonios-ex-brujos' element={<TestimoniosExBrujos/>} />
        <Route path='/testimonios-ex-homosexuales' element={<TestimoniosExHomosexuales/>} />
        <Route path='/testimonios-ex-lesbianas' element={<TestimoniosExLesbianas/>} />
        <Route path='/testimonios-ex-prostitutas' element={<TestimoniosExProstitutas/>} />
        <Route path='/testimonios-ex-sicarios' element={<TestimoniosExSicarios/>} />
        <Route path='/testimonios-ex-transgenero' element={<TestimoniosExTransgenero/>} />
        <Route path='/fundador' element={<Fundador />} />
        <Route path='/informacion-corporativa' element={<InformacionCorporativa />} />
        <Route path='/apadrinamiento' element={<Apadrinamiento />} />
        <Route path='/halloween' element={<Halloween />} />
        <Route path='/ouija' element={<Ouija />} />
        <Route path='/caricaturas-peligrosas' element={<CaricaturasPeligrosas />} />
      </Routes>
    </BrowserRouter>
  )
}