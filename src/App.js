import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Nav from "./components/Nav"

const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<About />} path="/about" />
				<Route element={<Projects />} path="/projects" />
			</Routes>
		</>
	)
}

export default App
