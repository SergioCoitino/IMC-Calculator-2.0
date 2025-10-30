import React, { useState } from 'react';
import FlagEs from '../assets/flags/es.png'
import FlagEn from '../assets/flags/en.png'
import FlagPt from '../assets/flags/pt.png'

const idiomas = {
  es: {
    titulo: 'Calculadora de IMC',
    nombre: 'Nombre',
    altura: 'Altura (m)',
    peso: 'Peso (kg)',
    calcular: 'Calcular',
    bajoPeso: 'Bajo peso',
    pesoNormal: 'Peso normal',
    sobrepeso: 'Sobrepeso',
    obesidadGradoI: 'Obesidad grado I',
    obesidadGradoII: 'Obesidad grado II',
    obesidadGradoIII: 'Obesidad grado III',
    resultado: 'Hola {nombre}. Tu IMC es {imc} ({clasificacion})',
    llenarCampos: 'Por favor, llena los campos',
  },
  en: {
    titulo: 'BMI Calculator',
    nombre: 'Name',
    altura: 'Height (m)',
    peso: 'Weight (kg)',
    calcular: 'Calculate',
    bajoPeso: 'Underweight',
    pesoNormal: 'Normal weight',
    sobrepeso: 'Overweight',
    obesidadGradoI: 'Obesity grade I',
    obesidadGradoII: 'Obesity grade II',
    obesidadGradoIII: 'Obesity grade III',
    resultado: 'Hi {nombre}. Your BMI is {imc} ({clasificacion})',
    llenarCampos: 'Please fill in the fields',
  },
  pt: {
    titulo: 'Calculadora de IMC',
    nombre: 'Nome',
    altura: 'Altura (m)',
    peso: 'Peso (kg)',
    calcular: 'Calcular',
    bajoPeso: 'Abaixo do peso',
    pesoNormal: 'Peso normal',
    sobrepeso: 'Sobrepeso',
    obesidadGradoI: 'Obesidade grau I',
    obesidadGradoII: 'Obesidade grau II',
    obesidadGradoIII: 'Obesidade grau III',
    resultado: 'Olá {nombre}. Seu IMC é {imc} ({clasificacion})',
    llenarCampos: 'Por favor, preencha os campos',
  },
};


function Calculadora() {
  const [idioma, setIdioma] = useState('es');
  const [nombre, setNombre] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
  };

  const calcularIMC = () => {
    if (altura !== '' && peso !== '') {
      const imc = (peso / (altura * altura)).toFixed(2);
      let clasificacion;

      if (imc < 18.5) {
        clasificacion = idiomas[idioma].bajoPeso;
      } else if (imc < 25) {
        clasificacion = idiomas[idioma].pesoNormal;
      } else if (imc < 30) {
        clasificacion = idiomas[idioma].sobrepeso;
      } else if (imc < 35) {
        clasificacion = idiomas[idioma].obesidadGradoI;
      } else if (imc < 41) {
        clasificacion = new Intl.NumberFormat(idioma, { maximumFractionDigits: 2 }).format(imc);
      clasificacion = idiomas[idioma].resultado.replace('{imc}', imc).replace('{clasificacion}', clasificacion);
    } 

    const mensajeResultado =idiomas[idioma].resultado
    .replace('{nombre}' , nombre)
    .replace('{imc}', imc)
    .replace ('{clasificacion}' , clasificacion);

    setResultado(mensajeResultado);
    setNombre('');
    setAltura('');
    setPeso('');
    }else {
      setResultado(idiomas[idioma].llenarCampos);
    }
    }

    return (
        <>
            <div className='main'>
                <header className="header">
                    <div className="idiomas">
                        <img src={FlagEs} alt="Español" onClick={() => cambiarIdioma('es')} />
                        <img src={FlagEn} alt="Inglés" onClick={() => cambiarIdioma('en')} />
                        <img src={FlagPt} alt="Portugués" onClick={() => cambiarIdioma('pt')} />
                    </div>
                </header>

                <h2>{idiomas[idioma].titulo}</h2>

                <div className="divNome">
                    <label>
                        {idiomas[idioma].nombre}
                    </label>                    
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                </div>

                <div className="divAltura">
                    <label>
                        {idiomas[idioma].altura}
                    </label>                          
                    <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />

                </div>

                <div className="divPeso">
                    <label>
                        {idiomas[idioma].peso}
                    </label> 
                    <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
                   
                </div>

                <div className="divCalc">
                    <button onClick={calcularIMC}>{idiomas[idioma].calcular}</button>                    
                </div>

                <span>{resultado}</span>

            </div>
        </>
    )
}

export default Calculadora