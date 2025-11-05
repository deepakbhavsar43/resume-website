import React, { Component } from 'react';
import { getProjectIconColor, getProjectIconClass } from '../utils/projectUtils';

class ProjectModal extends Component {
  componentDidMount() {
    // Add modal-open class to body to prevent scrolling
    document.body.classList.add('modal-open');
    this.setModalColor();
  }

  componentDidUpdate(prevProps) {
    // Update color when project changes
    if (prevProps.project !== this.props.project || prevProps.projectIndex !== this.props.projectIndex) {
      this.setModalColor();
    }
  }

  setModalColor = () => {
    const { project, projectIndex } = this.props;
    if (project) {
      const accentColor = getProjectIconColor(project.category, projectIndex);
      console.log('Setting modal color:', accentColor, 'for project:', project.title);
      document.documentElement.style.setProperty('--modal-accent-color', accentColor);
    }
  }

  componentWillUnmount() {
    // Remove modal-open class to restore scrolling
    document.body.classList.remove('modal-open');
    // Reset the modal accent color
    document.documentElement.style.removeProperty('--modal-accent-color');
  }

  render() {
    if (!this.props.isOpen || !this.props.project) {
      return null;
    }

    const { project, projectIndex, onClose } = this.props;
    const projectColor = getProjectIconColor(project.category, projectIndex);

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <style>
            {`
              .modal-section h3:before {
                background: ${projectColor} !important;
              }
              .modal-link-btn:not(.github) {
                background: ${projectColor} !important;
              }
              .modal-link-btn:not(.github):hover {
                box-shadow: 0 4px 12px ${projectColor}40 !important;
              }
            `}
          </style>
          <div className="modal-header">
            <button className="modal-close" onClick={onClose}>
              <i className="fa fa-times"></i>
            </button>
          </div>
          
          <div className="modal-content">
            <div className="modal-project-header">
              <div 
                className="modal-project-icon" 
                style={{ backgroundColor: getProjectIconColor(project.category, projectIndex) }}
              >
                <i className={getProjectIconClass(project.category)}></i>
              </div>
              <div className="modal-project-title-section">
                <h2 className="modal-project-title">{project.title}</h2>
                <p className="modal-project-category">{project.category}</p>
              </div>
            </div>

            <div className="modal-project-body">
              <section className="modal-section" style={{ borderLeftColor: projectColor }}>
                <h3>Project Overview</h3>
                <p className="modal-description">{project.description}</p>
              </section>

              {project.technologies && (
                <section className="modal-section" style={{ borderLeftColor: projectColor }}>
                  <h3>Technologies Used</h3>
                  <div className="modal-technologies">
                    {project.technologies.split(',').map((tech, i) => (
                      <span 
                        key={i} 
                        className="modal-tech-tag"
                        style={{ backgroundColor: projectColor }}
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {project.achievements && (
                <section className="modal-section" style={{ borderLeftColor: projectColor }}>
                  <h3>Key Achievements</h3>
                  <div className="modal-achievements">
                    {project.achievements.split(' • ').map((achievement, i) => (
                      <div key={i} className="modal-achievement-item">
                        <i className="fa fa-check-circle"></i>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section className="modal-section" style={{ borderLeftColor: projectColor }}>
                <h3>Project Impact</h3>
                <div className="modal-impact">
                  {this.getProjectImpact(project)}
                </div>
              </section>

              {(project.url || project.github) && (
                <section className="modal-section" style={{ borderLeftColor: projectColor }}>
                  <h3>Project Links</h3>
                  <div className="modal-links">
                    {project.url && (
                      <a href={project.url} className="modal-link-btn" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-external-link"></i>
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} className="modal-link-btn github" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                        View Code
                      </a>
                    )}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }



  getProjectImpact = (project) => {
    const categoryLower = project.category.toLowerCase();
    
    if (categoryLower.includes('genai') || categoryLower.includes('ai')) {
      return (
        <div className="impact-grid">
          <div className="impact-item">
            <h4>Business Value</h4>
            <p>Automated manual processes and enhanced decision-making capabilities through AI-powered insights.</p>
          </div>
          <div className="impact-item">
            <h4>Technical Innovation</h4>
            <p>Implemented cutting-edge AI technologies including LLMs, prompt engineering, and advanced data processing.</p>
          </div>
        </div>
      );
    } else if (categoryLower.includes('blockchain')) {
      return (
        <div className="impact-grid">
          <div className="impact-item">
            <h4>Decentralization</h4>
            <p>Enhanced transparency and reduced intermediary costs through blockchain technology implementation.</p>
          </div>
          <div className="impact-item">
            <h4>Security & Trust</h4>
            <p>Implemented immutable ledger systems ensuring data integrity and trustless transactions.</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="impact-grid">
          <div className="impact-item">
            <h4>Efficiency Gains</h4>
            <p>Streamlined operations and improved system performance through optimized architecture.</p>
          </div>
          <div className="impact-item">
            <h4>User Experience</h4>
            <p>Enhanced user interaction and accessibility through modern development practices.</p>
          </div>
        </div>
      );
    }
  };
}

export default ProjectModal;