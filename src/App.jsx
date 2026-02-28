import React from 'react';
import Radio from './Form/Radio';
import useForm from './Hooks/useForm';
import QuestionCard from './Form/QuestionCard';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [correctQuestion, setCorrectQuestion] = React.useState(0);
  const [value, setValue] = React.useState('');
  const question = perguntas[currentQuestion];

  function handleSubmit(event) {
    event.preventDefault();
    if (value === question.resposta) {
      setCorrectQuestion((prev) => prev + 1);
    }
    setCurrentQuestion((prev) => prev + 1);
    setValue('');
  }

  return (
    <div>
      {currentQuestion + 1 > perguntas.length ? (
        <p>
          Você acertou {correctQuestion} de {perguntas.length}
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <fieldset
            style={{
              padding: '2rem',
              marginBottom: '1rem',
              border: '2px solid #eee',
            }}
          >
            <legend style={{ fontWeight: 'bold' }}>{question.pergunta}</legend>

            <Radio
              key={question}
              options={question.options}
              setValue={setValue}
              value={value}
            />
          </fieldset>
          <button disabled={!value}>Próxima</button>
        </form>
      )}
    </div>
  );
};

export default App;
