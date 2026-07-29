import ProjectCard from '../components/ProjectCard'
import PageContainer from '../components/PageContainer'
import PageHeader from '../components/PageHeader'
import { projects } from '../data/projects'

function Projects() {
  return (
    <PageContainer>
      <PageHeader title="Projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageContainer>
  )
}

export default Projects
