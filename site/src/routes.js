import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import CR from './pages/ConditionalRenderization/index';
import Relatorio from './pages/RelatorioPedido/index';

export default function Index() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/ConditionalRenderization" element={<CR/>} />
                <Route path="/RelatorioPedidos" element={<Relatorio/>} />
            </Routes>
        </BrowserRouter>
    )
}