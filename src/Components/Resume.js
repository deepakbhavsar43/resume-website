import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills, index) {
        var projectImage = 'images/tech/' + skills.image;
        return <div key={skills.name} className="columns feature-item" style={{
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          padding: '40px',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'flex-start',
          boxSizing: 'border-box',
          flex: '0 0 calc(33.33% - 30px)',
          minWidth: '300px',
          maxWidth: '400px',
          marginBottom: '40px',
        }}>
          <img className='skill' alt={skills.name} src={projectImage} style={{
            width: '100px',
            height: '100px',
            objectFit: 'contain',
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '8px'
          }} />
          <h5 style={{margin: '10px 0', fontSize: '18px'}}>{skills.name}</h5>
          <p style={{margin: '0', fontSize: '14px', lineHeight: '1.4'}}>{skills.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">
        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div> */}
        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <p className="lead">{skillmessage}</p>
          </div>

        </div>

        <div style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          padding: '40px 40px',
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            maxWidth: '1400px',
            margin: '0 auto',
            listStyle: 'none',
            overflow: 'hidden',
            width: '100%'
          }}>
            {skills}
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
