import aboutMe from './aboutMe'
import contactForm from './contactForm'
import Footer from './Footer'
import Navbar from './Navbar'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('aboutMe');
  
    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
      if (currentPage === 'aboutMe') {
        return <aboutMe />;
      }
      if (currentPage === 'projects') {
        return <Projects />;
      }
      if (currentPage === 'contactForm') {
        return <contactForm />;
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
    );
  }
