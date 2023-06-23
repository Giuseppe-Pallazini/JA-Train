import './index.scss'
import '../../assets/common.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Index() {
    const [nmrPe, setNmrPe] = useState('');
    const [fornecedor, setFornecedor] = useState('');
    const [nmrNf, setNmrNf] = useState('');
    const [valor, setValor] = useState('');
    const [vencimento, setVencimento] = useState('');

    const [resultNmrPe, setResultNmrPe] = useState('');
    const [resultFornecedor, setResultFornecedor] = useState('');
    const [resultNmrNf, setResultNmrNf] = useState('');
    const [resultValor, setResultValor] = useState('');
    const [resultVencimento, setResultVencimento] = useState('');

    const [confirmButton, setConfirmButton] = useState(false);

    const [showComponent, setShowComponent] = useState(false);

    function button() {
        setConfirmButton(true)

        setShowComponent(!showComponent);

        setResultNmrPe(nmrPe)
        setResultFornecedor(fornecedor)
        setResultNmrNf(nmrNf)
        setResultValor(valor)
        setResultVencimento(vencimento)
    }

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var dataAtual = dia + '/' + mes;

    return (
        <main className='main-RP'>
            <section>
                <Link to='/' className='p-rp'> Voltar </Link>
                <h1 className='h1-rp'> Relatório Pedidos </h1>
            </section>
            <section className='section-agrupamento'>
                <section className='section2'>
                    <div className='divs-rp'>
                        <p> P.e. N°: </p>
                        <input className='inp-div1' type='text' onChange={e => setNmrPe(e.target.value)} />
                    </div>
                    <div className='divs-rp'>
                        <p> Fornecedor: </p>
                        <input className='inp-div2' type='text' onChange={e => setFornecedor(e.target.value)} />
                    </div>
                    <div className='divs-rp'>
                        <p> N° NF: </p>
                        <input className='inp-div3' type='text' onChange={e => setNmrNf(e.target.value)} />
                    </div>
                    <div className='divs-rp'>
                        <p> Valor: </p>
                        <input className='inp-div4' type='text' onChange={e => setValor(e.target.value)} />
                    </div>
                    <div className='divs-rp'>
                        <p> Vencimento: </p>
                        <input className='inp-div5' type='text' onChange={e => setVencimento(e.target.value)} />
                    </div>

                    <button className='button-rp' onClick={button}> OK </button>
                </section>

                {confirmButton === true &&
                    <CSSTransition
                        in={showComponent}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                        <section className='section2'>
                            <h1> Resultado </h1>
                            <div className='section2-divResult'>
                                <div className='divs-rp-2'>
                                    <p> P.E. N°: {resultNmrPe}</p>
                                </div>
                                <div className='divs-rp-2'>
                                    <p> FORNECEDOR: {resultFornecedor} </p>
                                </div>
                                <div className='divs-rp-2'>
                                    <p> N° NF: {resultNmrNf}</p>
                                </div>
                                <div className='divs-rp-2'>
                                    <p> VALOR: {resultValor}</p>
                                </div>
                                <div className='divs-rp-2'>
                                    <p> VENCIMENTO: {resultVencimento}</p>
                                </div>
                                <div className='divs-rp-2'>
                                    <p> IMPLANTAÇÃO: {dataAtual}</p>
                                </div>
                                <div className='divs-rp-2'>
                                    <p> STATUS:IMPLANTADO, AGUARDANDO APROVAÇÃO. </p>
                                </div>
                            </div>
                        </section>
                    </CSSTransition>
                }

            </section>
        </main>
    );
}