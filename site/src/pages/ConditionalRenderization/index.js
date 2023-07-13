import './index.scss'
import '../../assets/common.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
//import { CSSTransition } from 'react-transition-group';

export default function Index() {
    const [mudarOpcao, setMudarOpcao] = useState(1);
    const [backgroundOpcao1, setBackgroundOpcao1]   = useState('div-rcSelecionada');
    const [backgroundOpcao2, setBackgroundOpcao2]   = useState('div-rcNaoSelecionada');
    const [backgroundOpcao3, setBackgroundOpcao3]   = useState('div-rcNaoSelecionada');

    function alterar1() {
        setMudarOpcao(1)
        setBackgroundOpcao1('div-rcSelecionada');
        setBackgroundOpcao2('div-rcNaoSelecionada');
        setBackgroundOpcao3('div-rcNaoSelecionada');
    }
    function alterar2() {
        setMudarOpcao(2)
        setBackgroundOpcao1('div-rcNaoSelecionada')
        setBackgroundOpcao2('div-rcSelecionada')
        setBackgroundOpcao3('div-rcNaoSelecionada')
    }
    function alterar3() {
        setMudarOpcao(3)
        setBackgroundOpcao1('div-rcNaoSelecionada')
        setBackgroundOpcao2('div-rcNaoSelecionada')
        setBackgroundOpcao3('div-rcSelecionada')
    }
    return (
        <main className="Main-RC">
            <Link to='/' className='p-rc'> Voltar </Link>
            <h1 className="h1-rc"> Treino Renderização Condicional </h1>
            <section className='rc-section1'>
            <div className="div-rc">
                {//<CSSTransition in={showComponent} timeout={300} className='fade' unmountOnExit>
                }
                <p onClick={alterar1} className={backgroundOpcao1}> Opção 1</p>
                {//</CSSTransition>
                }
            
                <p onClick={alterar2} className={backgroundOpcao2}> Opção 2</p>
               

                
                <p onClick={alterar3} className={backgroundOpcao3}> Opção 3</p>
                
            </div>
            <div className='linha-divrc'> </div>
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
            </section>
        </main>
    )
}