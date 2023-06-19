import './index.scss'
import '../../assets/common.scss'
import { Link } from 'react-router-dom';

export default function Index() {

    return (
        <main className='main-RP'>
            <section>
                <Link to='/' className='p-rp'> Voltar </Link>
                <h1 className='h1-rp'> Relatorio Pedidos </h1>
            </section>

            <section className='section2'>
                <div className='divs-rp'>
                    <p> P.e. N°: </p>
                    <input className='inp-div1' type='text' />
                </div>
                <div className='divs-rp'>
                    <p> Fornecedor: </p>
                    <input className='inp-div2' type='text' />
                </div>
                <div className='divs-rp'> 
                    <p> N° NF: </p>
                    <input className='inp-div3' type='text' />
                    </div>
                <div className='divs-rp'>
                    <p> Valor: </p>
                    <input className='inp-div4' type='text' />
                </div>
                <div className='divs-rp'>
                    <p> Vencimento: </p>
                    <input className='inp-div5' type='text' />
                </div>

                <button className='button-rp'> OK </button>
            </section>
        </main>
    );
}