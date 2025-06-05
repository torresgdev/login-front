import React from 'react'
import './App.css'
import AppRoutes from './routes'
import Button from './components/ui/Button'
import Input from './components/ui/Input'

const  App: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [loadingButton, setLoadingButto] = React.useState(false)

  return (
    <div className="minh-h-screen flex-flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className='text-3xl font-bold mb-8'>Testando Componentes UI</h1>

      <div className='w-full max-w-sm bg-white p-8 rounded-lg shadow-md'>
          <Input
            label='Nome Completo'
            type='text'
            placeholder='Digite seu nome'
            id='name'
            name='name'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />

        <Input 
          label='E-mail'
          type='email'
          placeholder='seu@email.com'
          id='email'
          name='email'
          />

        <Button 
          onClick={() => alert('Botao primario clicado!')}
          className='mt-4 p-3 bg-blue-400 rounded-2xl m-3'
          isLoading={loadingButton}
          onClickCapture={() => {
            setLoadingButto(true);
            setTimeout(() => setLoadingButto(false),2000)
          }}>
            {loadingButton ? 'Processando...' : 'Botão Primário'}
          </Button>

          <Button
            variant="secondary"
            onClick={() => alert('Botão scundário clicado!')}
            className='mt-4 p-3 bg-green-400 rounded-2xl'>
              Botão Secundário
            </Button>
      </div>
    </div>    
      
  )
}

export default App
