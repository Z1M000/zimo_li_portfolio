import ExperienceItem from '../components/ExperienceItem'
import PageContainer from '../components/PageContainer'
import PageHeader from '../components/PageHeader'
import { experiences } from '../data/experiences'

function Experience() {
  return (
    <PageContainer>
      <PageHeader title="Experience" />
      <ol>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </ol>
    </PageContainer>
  )
}

export default Experience
