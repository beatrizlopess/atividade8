import React, {useState} from 'react'
import './Pesquisa.css'
import LogoMoney from './money.png'


export default function Pesquisa (props) {

    //estado
    const [texto, setTexto] = useState(0)
    const [cor, setCor] = useState(props.cor)
    const [moedaA, setMoedaA] = useState(props.moedaA)
    const [resultado, setResultado] = useState('')

    //funcoes
    const atualizarValor = (event) => {
        setTexto(event.target.value)
    }
    
    const converter = async () => {
        let url = "https://economia.awesomeapi.com.br/json/all/" + moedaA + "-BRL"
        let result = await fetch(url)
        let dados = await result.json()
        setResultado( parseFloat(texto) * dados[moedaA].bid )
    }

    return (
        <div className="div--main" style={{backgroundColor: cor}}>
            <img src={LogoMoney} />
            <h5>Conversão de {moedaA + '-BRL'} </h5>
            <input type="text" placeholder="Digite o valor: " onChange={atualizarValor} />
            <button onClick={converter} >Converter</button>
            <p>{resultado}</p>
        </div>
    )
}