import './index.scss'
import '../../assets/common.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    const [mudarOpcao, setMudarOpcao] = useState();

    function alterar1() {
        setMudarOpcao(1)
    }
    function alterar2() {
        setMudarOpcao(2)
    }
    function alterar3() {
        setMudarOpcao(3)
    }
    return (
        <main className="Main-RC">
            <Link to='/' className='p-rc'> Voltar </Link>
            <h1 className="h1-rc"> Treino Renderização Condicional </h1>
            <div className="div-rc">
                <p onClick={alterar1}> Opção 1</p>
                <p onClick={alterar2}> Opção 2</p>
                <p onClick={alterar3}> Opção 3</p>
            </div>
            {mudarOpcao === 1 && <div>
                <h1 className='h1-renderization'> Você selecionou a opção 1 </h1>
            </div>
            }
            {mudarOpcao === 2 && <div>
                <h1 className='h1-renderization'> Você selecionou a opção 2 </h1>
            </div>
            }
            {mudarOpcao === 3 && <div>
                <h1 className='h1-renderization'> Você selecionou a opção 3 </h1>
            </div>
            }
        </main>
    )
}