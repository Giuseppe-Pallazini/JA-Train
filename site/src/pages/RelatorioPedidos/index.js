import './index.scss'
import '../../assets/common.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Index() {
    const [nmrPe,setNmrPe] = useState('');
    const [fornecedor,setFornecedor] = useState('');
    const [nmrNf,setNmrNf] = useState('');
    const [valor,setValor] = useState('');
    const [vencimento,setVencimento] = useState('');

    const [confirmButton, setConfirmButton] = useState(false);

    function button() {
        setConfirmButton(true)
    }

    return (
        <main className='main-RP'>
            <section>
                <Link to='/' className='p-rp'> Voltar </Link>
                <h1 className='h1-rp'> Relatorio Pedidos </h1>
            </section>

            <section className='section2'>
                <div className='divs-rp'>
                    <p> P.e. N°: </p>
                    <input className='inp-div1' type='text' onChange={e => setNmrPe(e.target.value)} />
                </div>
                <div className='divs-rp'>
                    <p> Fornecedor: </p>
                    <input className='inp-div2' type='text' onChange={e => setFornecedor(e.target.value)}/>
                </div>
                <div className='divs-rp'> 
                    <p> N° NF: </p>
                    <input className='inp-div3' type='text' onChange={e => setNmrNf(e.target.value)}/>
                    </div>
                <div className='divs-rp'>
                    <p> Valor: </p>
                    <input className='inp-div4' type='text' onChange={e => setValor(e.target.value)}/>
                </div>
                <div className='divs-rp'>
                    <p> Vencimento: </p>
                    <input className='inp-div5' type='text'onChange={e => setVencimento(e.target.value)} />
                </div>

                <button className='button-rp' onClick={button}> OK </button>
                { confirmButton === true && <div>
                        <h1> Teste </h1>
                    </div>}
            </section>
        </main>
    );
}