import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projetos from './Projetos.jsx'
import Pinguins from './Pinguins.jsx'
import Aguia from './Aguia.jsx'
import Falcao from './Falcao.jsx'
import Header from './Hearder.jsx'


function AppRoutes() {
    return (
        
        <BrowserRouter>
        <Header/>
            <Routes>
                    <Route index element={ <Projetos /> }></Route>
                    <Route path="/Projetos" element={ <Projetos /> }></Route>
                    <Route path="/Pinguins" element={ < Pinguins/> }></Route>
                    <Route path="/Falcao" element={ <Falcao /> }></Route>
                    
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes