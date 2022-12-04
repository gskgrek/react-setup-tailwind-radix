import CSelect from './components/select/Select'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
      <div>Lorem ipsum</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>dolor sit</div>
        <div>
          <CSelect />
        </div>
        <div>Lorem...</div>
      </div>
      <div>Hello world</div>
    </div>
  )
}

export default App
