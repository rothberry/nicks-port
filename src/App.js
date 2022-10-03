import "./App.css"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Nav from "./components/Nav"
import ProjectChart from "./components/ProjectChart"
import ProjectTasks from "./components/ProjectTasks"

const App = () => {
	const [chartData, setChartData] = useState({})
	return (
		<>
			<Nav />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<About />} path="/about" />
				{/* <Route element={<Projects />} path="/projects" /> */}
				<Route path="/projects" element={<Projects />}>
					<Route path="chart" element={<ProjectChart />} />
					<Route path="tasks" element={<ProjectTasks />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
