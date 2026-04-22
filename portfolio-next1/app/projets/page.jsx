"use client";

import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "@/store/slices/projectSlice";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.items);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get("/api/projets");
      dispatch(setProjects(res.data));
    };

    fetchProjects();
  }, [dispatch]);

  return (
    <section className="mx-auto max-w-6xl">
      <h2 className="mb-8 text-3xl font-bold">Mes projets</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}