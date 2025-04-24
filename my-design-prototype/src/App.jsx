import Button from './components/Button'
import TestComponent from './components/TestComponent'

function App() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">My Design Prototype</h1>
      <TestComponent />
      <div className="flex gap-4 flex-wrap justify-center">
        <Button text="Primary Action" color="emerald" />
        <Button text="Secondary Action" color="blue" />
        <Button text="Danger Action" color="red" />
      </div>
    </div>
  )
}

export default App
