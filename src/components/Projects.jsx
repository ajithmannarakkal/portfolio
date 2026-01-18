import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Virtual Cards',
            role: 'Self Product (Company)',
            duration: 'Jun 2025 - Jul 2025',
            tech: ['Flutter', 'AI/ML', 'Encryption', 'Analytics'],
            problem: 'Need for instant issuance and management of virtual and physical expense cards with strict controls.',
            solution: 'Business Expense Management platform enabling defined spending limits, AI-powered receipt capture, and real-time monitoring.',
            responsibilities: [
                'Developed a Virtual Cards and Business Expense Management platform enabling instant issuance of cards.',
                'Implemented features for AI-powered receipt capture, automated expense categorization, and accounting exports.',
                'Ensured enterprise-grade security with encryption, tokenization, instant card freeze/unfreeze, and fraud prevention.'
            ],
            links: []
        },
        {
            name: 'OCW – Cloud-Based Digital Payment Platform',
            role: 'Self Product (Company)',
            duration: 'Apr 2024 - Jan 2026',
            tech: ['Flutter', 'Dart', 'REST APIs', 'Secure Payment Gateways', 'Cloud Services'],
            problem: 'Managing Accounts Payable (AP) and Accounts Receivable (AR) efficiently in a unified platform.',
            solution: 'Cloud-based FinTech payment application supporting Printable Checks, eChecks, ACH, Wires, and Wallet-to-Wallet transfers.',
            responsibilities: [
                'Built secure and scalable payment workflows using military-grade security standards to prevent check fraud.',
                'Designed intuitive, user-friendly UI for seamless payment processing on mobile devices.',
                'Supported 24/7 operational readiness with robust error handling and customer support integration.'
            ],
            links: []
        },
        {
            name: 'Zil Foundation',
            role: 'Self (Company owned)',
            duration: 'Apr 2024 - Jul 2024',
            tech: ['Flutter', 'Local Storage', 'Reporting'],
            problem: 'Streamlining pension administration and tracking for organizations.',
            solution: 'Pensioner management and reporting application enabling efficient tracking of records and data.',
            responsibilities: [
                'Implemented features for generating detailed pension reports and secure local storage.',
                'Focused on building a user-friendly and secure Flutter-based interface.',
                'Improved operational efficiency and accuracy in pension management workflows.'
            ],
            links: []
        },
        {
            name: 'ZQ Plus Platform',
            role: 'ZQ Innovations Pvt Ltd',
            duration: 'Sep 2023 - Mar 2024',
            tech: ['Flutter', 'Real-time Databse', 'Notifications'],
            problem: 'Enabling customers to discover professionals and book consultations seamlessly.',
            solution: 'Multi-app service marketplace consisting of Customer (ZQ Plus), Professional (ZQ Pro), and Team apps.',
            responsibilities: [
                'Contributed to building end-to-end booking workflows, profile management, and real-time notifications.',
                'Implemented payment dashboards and consultation management features (rescheduling, cancellations).',
                'Implemented scalable Flutter-based UI and backend integrations for service discovery.'
            ],
            links: []
        },
        {
            name: 'FMart Grocer',
            role: 'External Client Retail ECommerce',
            duration: 'Oct 2022 - Feb 2023',
            tech: ['Flutter', 'Location Services', 'Loyalty Integration'],
            problem: 'Location-based online grocery shopping for customers in Dubai and Abu Dhabi.',
            solution: 'Mobile application enabling users to browse fresh groceries, select nearest stores, and receive doorstep delivery.',
            responsibilities: [
                'Implemented product catalog browsing, store-specific offers, and loyalty program integration.',
                'Contributed to building a smooth, scalable Flutter UI related to personalized offers and alerts.',
                'Ensured a seamless shopping experience for individuals and families.'
            ],
            links: []
        }
    ];

    return (
        <section id="projects">
            <h3 className="section-title">Featured Projects</h3>
            <div style={{
                display: 'grid',
                gap: '2rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
            }}>
                {projects.map((project, index) => (
                    {
                        projects.map((project, index) => (
                            <div key={index} className="modern-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', color: 'var(--accent-color)' }}>{project.name}</h4>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{project.duration}</div>
                                    </div>
                                    <span style={{ fontSize: '0.85rem', padding: '0.2rem 0.6rem', backgroundColor: '#e9ecef', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                                        {project.role}
                                    </span>
                                </div>

                                <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                                    <strong>Problem:</strong> {project.problem}
                                </p>
                                <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                    <strong>Solution:</strong> {project.solution}
                                </p>

                                <div style={{ marginBottom: '1rem' }}>
                                    <ul style={{ paddingLeft: '1.2rem', listStyle: 'disc' }}>
                                        {project.responsibilities.map((resp, i) => (
                                            <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.85rem',
                                            backgroundColor: 'rgba(0, 95, 115, 0.1)',
                                            color: 'var(--accent-color)',
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '20px',
                                            fontWeight: 500
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {project.links.length > 0 && (
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        {project.links.map((link, i) => (
                                            <a key={i} href={link.url} style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                                                {link.label} ↗
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))
                    }
            </div>
        </section>
    );
};

export default Projects;
