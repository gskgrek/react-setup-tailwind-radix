import CSelect from './components/select/Select'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>Lorem ipsum</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>dolor sit</div>
        <CSelect />
        <div>Lorem...</div>
      </div>
      <div>Hello world</div>
    </div>
  )
}

export default App
