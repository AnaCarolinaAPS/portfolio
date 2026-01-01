import { Route, Routes } from "react-router-dom"
import { Layout } from "../components/Layout"

import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Project from "../pages/Project"
import ProjectDetails from "../pages/Project/Show"

export const MainRoutes = () => {
    return (
        <Routes>            
            <Route element={<Layout />}>
                <Route 
                    index
                    element={<Home />}
                /> 

                <Route 
                    path="/sobre" 
                    element={<About />} 
                />

                <Route path="/projetos">
                    <Route 
                        index
                        element={<Project />}
                    /> 

                    <Route path=":id" 
                        element={<ProjectDetails />} 
                    />

                </Route> 
            </Route>            
        </Routes>
    )
}