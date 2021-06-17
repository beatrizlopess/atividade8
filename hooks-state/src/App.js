import './App.css';
import Pesquisa from './Pesquisa'

export default function App(props) {
  return (
    <div className="App">
      <Pesquisa moedaA="USD" cor="red"/>
      <Pesquisa moedaA="EUR" cor="blue"/>
      <Pesquisa moedaA="BTC" cor="pink"/>

    </div>
  )
}
