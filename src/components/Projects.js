import { Card, Button, Stack, Row } from 'react-bootstrap/';
import Background from '../img/IMG_0096.JPG'


export default function ProjectCard({ projectArray }) {
  return (
    <div style={{  
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
    }}
    className='d-flex justify-content-evenly align-items-space-between flex-wrap m-auto'>
      <Row xs={1} md={2} lg={3} className='m-4'>
        {projectArray &&
          projectArray.map((project) => (
            <div className='d-flex justify-content-center align-items-center'>

              <Card className='d-flex justify-content-center align-items-center background-blur-container light-container-text' style={{ width: '26rem' }}>
                <Card.Img variant="top" src={project.projectImg} />
                <Card.Body>
                  <Card.Title>{project.projectName}</Card.Title>
                  <Card.Text>
                    {project.projectDesc}
                  </Card.Text>
                  <Stack className='d-flex justify-content-center align-items-center'  direction="horizontal" gap={5}>
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

