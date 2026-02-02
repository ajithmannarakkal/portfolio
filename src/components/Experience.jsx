import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'Zil Money',
            role: 'Software Engineer',
            duration: 'Apr 2024 - Present',
            description: [
                'Took ownership of features from design through deployment.',
                'Implemented secure REST API integrations and state management solutions to support complex transaction workflows.',
                'Orchestrated cross-functional collaboration with backend, QA, and product teams to deliver stable releases.',
                'Facilitated stakeholder communication and requirement discussions to resolve complex user issues.',
                'Mentored junior developers, encouraging code quality standards and knowledge sharing.',
                'Increased application efficiency by ~30% through performance optimization.',
                'Supported high-volume daily financial transactions for U.S.-based business customers.'
            ]
        },
        {
            company: 'Hexeam Software Solutions',
            role: 'Junior Software Engineer',
            duration: 'Oct 2022 - Apr 2024',
            description: [
                'Developed and maintained end-to-end mobile applications used by production users, featuring real-time updates and location services.',
                'Connected client-side interfaces with backend services and applied SOLID principles for maintainability.'
            ]
        },
        {
            company: 'Ecobiz Technologies Pvt. Ltd',
            role: 'Software Engineer Trainee',
            duration: 'Nov 2021 - Oct 2022',
            description: [
                'Built foundational expertise in Flutter & Dart Mobile App Development and UI/UX debugging.'
            ]
        }
    ];

    const education = [
        {
            school: 'College of Applied Sciences Vazhakkad (IHRD)',
            degree: 'B.Sc Computers',
            duration: '2016 - 2019'
        }
    ];

    return (
        <section id="experience">
            <h3 className="section-title">Experience</h3>
            <div style={{ paddingLeft: '1rem' }}>
                {experiences.map((exp, index) => (
                    <div key={index} style={{ marginBottom: '0', position: 'relative', paddingLeft: '2rem', paddingBottom: '3rem', borderLeft: '2px solid var(--border-color)' }}>
                        <div style={{
                            position: 'absolute',
                            left: '-7px',
                            top: '0',
                            width: '12px',
                            height: '12px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            border: '3px solid var(--accent-color)',
                            zIndex: 1
                        }}></div>
                        <div style={{ transform: 'translateY(-6px)' }}>
                            <h4 style={{ fontSize: '1.2rem', margin: 0 }}>{exp.role}</h4>
                            <div style={{ color: 'var(--accent-color)', fontSize: '1rem', fontWeight: 500, margin: '0.2rem 0' }}>{exp.company}</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>{exp.duration}</div>
                            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0 }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: '1.6' }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="section-title">Education</h3>
            <div style={{ borderLeft: '2px solid var(--border-color)', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
                {education.map((edu, index) => (
                    <div key={index} style={{ marginBottom: '2rem', position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            left: '-2.1rem',
                            top: '0.4rem',
                            width: '12px',
                            height: '12px',
                            backgroundColor: 'var(--accent-color)',
                            borderRadius: '50%',
                            border: '2px solid white'
                        }}></div>
                        <h4 style={{ fontSize: '1.1rem' }}>{edu.degree}</h4>
                        <div style={{ color: 'var(--accent-color)', fontSize: '0.95rem', marginBottom: '0.2rem' }}>{edu.school}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{edu.duration}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
