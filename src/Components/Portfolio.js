import React, { Component } from 'react';
import ProjectModal from './ProjectModal';
import { getProjectIconColor, getProjectIconClass } from '../utils/projectUtils';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      selectedProject: null,
      selectedProjectIndex: null
    };
  }

  componentDidMount() {
    // Add escape key listener to close modal and reset scroll
    this.handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    };
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    // Ensure body scrolling is restored when component unmounts
    document.body.classList.remove('modal-open');
    // Remove event listener
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  openModal = (project, index) => {
    this.setState({
      modalOpen: true,
      selectedProject: project,
      selectedProjectIndex: index
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      selectedProject: null,
      selectedProjectIndex: null
    });
    // Safeguard to ensure body scrolling is restored
    setTimeout(() => {
      document.body.classList.remove('modal-open');
    }, 100);
  };

  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map((projects, index) => {

        // Extract main title and subtitle
        const titleParts = projects.title.split(' - ');
        const mainTitle = titleParts[0] || projects.title;
        const subtitle = titleParts[1] || projects.category.split(' • ')[1] || '';

        return (
          <div key={projects.title} className="portfolio-card">
            <div className="portfolio-card-header">
              <div 
                className="portfolio-icon" 
                style={{ backgroundColor: getProjectIconColor(projects.category, index) }}
              >
                <i className={getProjectIconClass(projects.category)}></i>
              </div>
            </div>
            
            <div className="portfolio-card-content">
              <h3 className="portfolio-title">{mainTitle}</h3>
              {subtitle && <p className="portfolio-subtitle">{subtitle}</p>}
              
              <p className="portfolio-description">
                {projects.description ? projects.description.substring(0, 120) + (projects.description.length > 120 ? '...' : '') : 'Advanced project showcasing modern development practices and enterprise-grade solutions.'}
              </p>
              
              {projects.technologies && (
                <div className="portfolio-technologies">
                  {projects.technologies.split(',').slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">#{tech.trim().split(' ')[0]}</span>
                  ))}
                </div>
              )}
            </div>
            
            <div className="portfolio-card-footer">
              <button 
                className="case-study-btn"
                onClick={() => this.openModal(projects, index)}
              >
                Case Study
              </button>
            </div>
          </div>
        );
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns">
            <h1 className="portfolio-main-title">CHECK OUT SOME OF MY WORKS</h1>
            <div className="portfolio-grid">
              {projects}
            </div>
          </div>
        </div>
        
        <ProjectModal
          isOpen={this.state.modalOpen}
          project={this.state.selectedProject}
          projectIndex={this.state.selectedProjectIndex}
          onClose={this.closeModal}
        />
      </section>
    );
  }
}

export default Portfolio;
