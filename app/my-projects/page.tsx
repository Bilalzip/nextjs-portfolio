"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{ backgroundImage: "url(/mountains.jpg)" }}
    className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
  >
    <div className="grid gap-5 md:grid-cols-2">
      {Projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          text={project.text}
          image={project.src}
          url={project.url}
        />
      ))}
    </div>
  </div>
  
  )
}

export default Page