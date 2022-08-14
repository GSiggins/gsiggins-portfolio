import { Card, Button, Stack, Row } from 'react-bootstrap/';
import Background from '../img/IMG_0096.JPG'


export default function ProjectCard({ projectArray }) {
  return (
    <div style={{  
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '90vh'
    }}
    className='d-flex justify-content-space-around flex-wrap m-auto'>
      <Row xs={1} md={2} lg={3}>
        {projectArray &&
          projectArray.map((project) => (
            <div>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={project.projectImg} />
                <Card.Body>
                  <Card.Title>{project.projectName}</Card.Title>
                  <Card.Text>
                    {project.projectDesc}
                  </Card.Text>
                  <Stack direction="horizontal" gap={3}>
                    <Button variant="secondary" href={project.projectGithub}>View Repo</Button>
                    <Button variant="secondary" href={project.projectLink}>View App</Button>
                  </Stack>
                </Card.Body>
              </Card>
            </div>
          ))};
      </Row>
    </div>
  )
}

