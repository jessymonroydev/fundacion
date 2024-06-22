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
import Historia from './page/subPage/Historia'
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
        <Route path='/investiganos' element={<Investiganos />} />
        <Route path='/historia' element={<Historia />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/contenido' element={<Contenido />} />
        <Route path='/escuela-para-padres' element={<EscuelaDePadres />} />
        <Route path='/madres-triunfadoras' element={<MadresTriunfadoras />} />
        <Route path='/enfoque' element={<Enfoque />} />
        <Route path='/como-educar' element={<ComoEducar />} />
        <Route path='/folletos' element={<Folletos />} />
        <Route path='/periodicos' element={<Periodicos />} />
        <Route path='/consursos' element={<Concursos />} />
        <Route path='/unete' element={<Unete />} />
      </Routes>
    </BrowserRouter>
  )
}