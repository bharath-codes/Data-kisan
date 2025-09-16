import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QueryInterface from "./pages/QueryInterface";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define all routes here */}
        <Route path="/" element={<Index />} />
        <Route path="/query" element={<QueryInterface />} />

        {/* IMPORTANT: DO NOT place any routes below this. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;