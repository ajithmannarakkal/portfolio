import React from 'react';

const About = () => {
    return (
        <section id="about">
            <h3 className="section-title">About</h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                I’m a <strong>Flutter Developer at ZilMoney</strong>, building scalable, production-ready FinTech mobile applications for Android and iOS.
                With 4+ years of hands-on experience, I specialize in developing high-performance cross-platform apps using Flutter, Dart, and Firebase, with a strong focus on clean architecture, maintainability, and user experience.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-color)', marginBottom: '0.5rem', fontWeight: 600 }}>What I work on:</h4>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {[
                        'Modular & scalable Flutter architecture',
                        'State management: GetX, Riverpod, Provider',
                        'REST API integrations & secure payment gateways',
                        'Google Maps, location services, and real-time data',
                        'Performance optimization & production stability'
                    ].map((item, index) => (
                        <li key={index} style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontSize: '1.2rem' }}>▹</span> {item}
                        </li>
                    ))}
                </ul>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                I collaborate closely with cross-functional teams, follow Agile development practices, and take ownership from idea → deployment.
                I also enjoy mentoring juniors and improving overall code quality within teams.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--accent-color)', fontWeight: 500, marginTop: '1rem' }}>
                🚀 Open to connecting with product-driven teams building scalable mobile solutions.
            </p>
        </section >
    );
};

export default About;
