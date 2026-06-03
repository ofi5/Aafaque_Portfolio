import React from 'react'
import Section from '../shared/section'
import './style.css'

const experienceData = [
    {
        company: "Soulstice Dating",
        location: "Remote",
        period: "May 2024 – May 2026",
        roles: [
            {
                title: "Senior Full-Stack Developer / Product Lead",
                period: "Jul 2025 – May 2026",
                bullets: [
                    "Architected Flask + MongoDB backend with RESTful APIs; optimized queries and indexing for high-volume data retrieval.",
                    "Implemented automated CI/CD on AWS EC2 via GitHub Actions and built Streamlit dashboards cutting team data-access time by 50%.",
                    "Introduced shared auth layer (AWS Cognito) across web, mobile, and internal tools, reducing duplication and keeping services consistent.",
                ]
            },
            {
                title: "Frontend Developer",
                period: "May 2024 – Jul 2025",
                bullets: [
                    "Translated Figma wireframes into Angular components integrated with Flask backend services.",
                    "Designed Flutter mobile architecture (Date Night, Signup, Profile, Package Selection) with Riverpod state and go_router navigation.",
                    "Built a shared component library with design tokens for responsive, accessible UI across 40+ screens.",
                ]
            }
        ]
    },
    {
        company: "Code.exe — UTD Coding Club",
        location: "Dallas, TX · Part-time",
        period: "Mar 2024 – May 2025",
        roles: [
            {
                title: "Lead Web Designer",
                period: null,
                bullets: [
                    "Designed and built the university coding club's interactive website in Angular with component-based architecture.",
                    "Collaborated with the team to gather requirements and iterate on design and functionality.",
                ]
            }
        ]
    },
    {
        company: "Delhi Metro Rail Corporation",
        location: "Mumbai, India",
        period: "Jun 2015 – Aug 2018",
        roles: [
            {
                title: "IT Support Engineer",
                period: null,
                bullets: [
                    "Supported technical reporting and operational tracking across large-scale infrastructure initiatives serving millions of annual commuters.",
                    "Standardized documentation across stakeholders and government agencies, ensuring compliance and keeping project timelines on schedule.",
                ]
            }
        ]
    }
]

const educationData = [
    {
        degree: "M.S. Information Technology & Management",
        school: "University of Texas at Dallas",
        period: "2023 – 2025",
        note: "Dean's Excellence Scholarship & Pandian Fellowship recipient",
        icon: "🎓"
    }
]

const certData = [
    {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        id: "W6SEXFQBSJBQQNCO",
        icon: "☁️"
    }
]

const Experience = () => {
    return (
        <Section id="experience" background="dark">
            <div className="experience-wrapper">
                <h1 className="exp-section-title">Experience</h1>

                <div className="timeline">
                    {experienceData.map((job) => (
                        <div key={job.company} className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="exp-card">
                                <div className="exp-card-header">
                                    <div className="exp-meta">
                                        <h3 className="exp-company">{job.company}</h3>
                                        <span className="exp-location">{job.location}</span>
                                    </div>
                                    <span className="exp-period">{job.period}</span>
                                </div>

                                <div className="exp-card-body">
                                    {job.roles.map((role) => (
                                        <div key={role.title} className="role-block">
                                            <div className="role-header">
                                                <span className="role-title">{role.title}</span>
                                                {role.period && (
                                                    <span className="role-period">{role.period}</span>
                                                )}
                                            </div>
                                            <ul className="role-bullets">
                                                {role.bullets.map((b, i) => (
                                                    <li key={i}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="edu-cert-row">
                    <div className="edu-cert-group">
                        <h2 className="group-title">Education</h2>
                        {educationData.map((e) => (
                            <div key={e.degree} className="edu-card">
                                <span className="edu-icon">{e.icon}</span>
                                <div>
                                    <p className="edu-degree">{e.degree}</p>
                                    <p className="edu-school">{e.school} · {e.period}</p>
                                    <p className="edu-note">{e.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="edu-cert-group">
                        <h2 className="group-title">Certifications</h2>
                        {certData.map((c) => (
                            <div key={c.name} className="edu-card">
                                <span className="edu-icon">{c.icon}</span>
                                <div>
                                    <p className="edu-degree">{c.name}</p>
                                    <p className="edu-school">{c.issuer}</p>
                                    <p className="edu-note">Validation: {c.id}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Experience
