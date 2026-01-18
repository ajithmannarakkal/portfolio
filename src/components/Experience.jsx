import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'Zil Money',
            role: 'Software Engineer',
            duration: 'Apr 2024 - Present',
            description: [
                'Built and maintained scalable Flutter modules across multiple FinTech products including payments and payroll systems.',
                'Integrated secure REST APIs and payment gateway workflows supporting various financial transactions.',
                'Enhanced app performance by approximately 30% through optimized state management and modular design.',
                'Owned product features from design to production release ensuring high stability, security, and compliance.',
                'Supported high-reliability financial workflows used by business customers.'
            ]
        },
        {
            company: 'Hexeam Software Solutions',
            role: 'Software Engineer',
            duration: 'Oct 2022 - Apr 2024',
            description: [
                'Developed end-to-end Flutter applications with real-time data integration and location services.',
                'Integrated REST APIs, Firebase, and Google Maps enhancing user interaction and experience.',
                'Improved performance and maintainability by implementing clean architecture principles.',
                'Delivered and supported multiple production applications for Android & iOS.'
            ]
        },
        {
            company: 'Ecobiz Technologies Pvt. Ltd',
            role: 'Software Engineer Trainee',
            duration: 'Nov 2021 - Oct 2022',
            description: [
                'Gained foundational knowledge in Flutter and mobile application development best practices.',
                'Assisted senior developers on real-time Flutter projects focusing on feature implementation.',
                'Contributed to UI development, bug fixing, and testing processes for Android applications.',
                'Acquired hands-on experience with Dart, REST APIs, and app architecture basics.'
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
