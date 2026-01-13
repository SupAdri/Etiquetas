import Content from "./components/Content"
import Doc from "./components/Doc"
import { useDoc } from "./store/docStore"

function App() {
  const { etiquetas } = useDoc()
  return (
    <div className="p-8 flex min-h-svh flex-col items-center justify-center space-y-2">
      <Content />
      {etiquetas.length? <Doc /> : ''}
    </div>
  )
}

export default App
