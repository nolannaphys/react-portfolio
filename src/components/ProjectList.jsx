export default function ProjectList(){
  const projs = [
    {
      name: "Proj 1",
      link: "https://www.google.com/"
    }
  ]

  return (
    <section>
      <h2>Projects</h2>
      <ul>
      {
        projs.map((project, i) => (
          <li key = {i}>
            <a href={project.link}>
              {project.name}
            </a>
          </li>
        ))
      }
      </ul>
    </section>
  )
};