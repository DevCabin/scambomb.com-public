import { Routes, Route } from 'react-router-dom'
import Vote from './pages/Vote'
import Results from './pages/Results'
import Control from './pages/Control'

function App() {
  return (
    <Routes>
      <Route path="/event/:code" element={<Vote />} />
      <Route path="/event/:code/results" element={<Results />} />
      <Route path="/event/:code/control" element={<Control />} />
    </Routes>
  )
}

export default App