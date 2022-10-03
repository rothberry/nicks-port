import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const Projects = () => {
	return (
		<div>
			Dive Site
			<br />
			<NavLink to="../chart" relative="path">
				Chart
			</NavLink>{" "}
			<NavLink to="../tasks" relative="path">
				tasks
			</NavLink>
			<br />
			<Outlet />
			{/* ProjectChart || ProjectTasks */}
		</div>
	)
}

export default Projects
