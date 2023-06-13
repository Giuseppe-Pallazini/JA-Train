import './app.scss'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <main className='main-app'>
      <h1 className='h1-app'> Treinos </h1>

        <Link className='link' to={'/ConditionalRenderization'}> - Renderização Condicional </Link>
        <Link className='link' to={'/RelatorioPedidos'}> - Relatorio dos Pedidos </Link>

    </main>
  );
}
