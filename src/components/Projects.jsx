import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Quick Note – Notes & Tasks',
            tagline: 'A beautiful, privacy-first note-taking experience',
            category: 'Productivity',
            icon: '📝',
            color: '#10b981',
            duration: 'Live on Play Store',
            description: 'Designed and built a premium offline-first note-taking app with a Pinterest-style masonry layout, rich text editing, smart checklists, and dark mode — all without requiring an internet connection or an account.',
            highlights: ['Masonry Grid Layout', 'Offline-First', 'Rich Text Editor', 'Smart Checklists', 'Dark Mode'],
            tech: ['Flutter', 'Local Storage', 'Material 3'],
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.eframesapps.quicknote', label: '▶ Play Store' }
            ],
            featured: true
        },
        {
            name: 'OCW – FinTech Payment Platform',
            tagline: 'Military-grade secure payment processing',
            category: 'FinTech',
            icon: '💳',
            color: '#6366f1',
            duration: 'Apr 2024 – Jan 2026',
            description: 'Built a cloud-based payment platform handling checks, eChecks, ACH, wires, and wallet transfers. Focused on military-grade security to prevent check fraud while maintaining an intuitive mobile experience for seamless payment processing.',
            highlights: ['Multi-Payment Modes', 'Fraud Prevention', 'Real-time Processing', '24/7 Operations'],
            tech: ['Flutter', 'REST APIs', 'Secure Gateways', 'Cloud'],
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.onlinecheckwriter.m', label: '▶ Play Store' },
                { url: 'https://apps.apple.com/in/app/online-check-writer/id1521980907', label: ' App Store' }
            ],
            featured: false
        },
        {
            name: 'Virtual Cards & Expense Management',
            tagline: 'AI-powered corporate expense control',
            category: 'FinTech',
            icon: '🏦',
            color: '#6366f1',
            duration: 'Jun 2025 – Jul 2025',
            description: 'Created a business expense platform with instant virtual card issuance, AI-powered receipt capture, automated expense categorization, and enterprise-grade security with card freeze/unfreeze and fraud prevention.',
            highlights: ['AI Receipt Capture', 'Instant Card Issuance', 'Automated Categorization', 'Fraud Prevention'],
            tech: ['Flutter', 'AI/ML', 'Encryption', 'Analytics'],
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.virtualcard.app', label: '▶ Play Store' },
                { url: 'https://apps.apple.com/in/app/virtual-cards/id6748954269', label: ' App Store' }
            ],
            featured: false
        },
        {
            name: 'International Payment Platform',
            tagline: 'Seamless cross-border money transfers',
            category: 'FinTech',
            icon: '🌍',
            color: '#6366f1',
            duration: 'Jun 2025 – Jul 2025',
            description: 'Developed a cross-border payment platform enabling U.S. businesses to send global wallet-to-bank transfers with real-time tracking, transparent fees, and regulatory compliance built directly into the workflow.',
            highlights: ['Cross-Border Transfers', 'Real-time Tracking', 'Transparent Fees', 'Compliance Built-in'],
            tech: ['Flutter', 'Cross-border API', 'Real-time'],
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.internationalpayments.app', label: '▶ Play Store' },
                { url: 'https://apps.apple.com/in/app/international-payment/id6748254326', label: ' App Store' }
            ],
            featured: false
        },
        {
            name: 'ZQ Plus – Service Booking',
            tagline: 'Full-stack booking ecosystem for professionals',
            category: 'Marketplace',
            icon: '📅',
            color: '#f59e0b',
            duration: 'Sep 2023 – Mar 2024',
            description: 'Contributed to a three-app ecosystem (Customer, Professional, Team) featuring end-to-end booking workflows, real-time notifications, payment dashboards, and consultation management with rescheduling and cancellation support.',
            highlights: ['3-App Ecosystem', 'Real-time Notifications', 'Payment Dashboards', 'Consultation Management'],
            tech: ['Flutter', 'Real-time DB', 'Push Notifications'],
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.zimpleq.plus', label: '▶ Customer App' },
                { url: 'https://play.google.com/store/apps/details?id=com.zimpleq.service', label: '▶ Professional App' },
                { url: 'https://play.google.com/store/apps/details?id=com.hexeam.zimpleq_seller_repository.zimpleq_seller_repository', label: '▶ Team App' }
            ],
            featured: false
        },
        {
            name: 'FMart Grocer',
            tagline: 'Location-based grocery delivery for UAE',
            category: 'E-Commerce',
            icon: '🛒',
            color: '#ef4444',
            duration: 'Oct 2022 – Feb 2023',
            description: 'Built a mobile grocery shopping app for Dubai and Abu Dhabi, featuring store-specific product catalogs, location-based store selection, personalized offers, loyalty rewards, and doorstep delivery for families and individuals.',
            highlights: ['Location-Based Stores', 'Loyalty Rewards', 'Personalized Offers', 'Doorstep Delivery'],
            tech: ['Flutter', 'Location Services', 'Loyalty Integration'],
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.fmartgrocer.app', label: '▶ Play Store' },
                { url: 'https://apps.apple.com/in/app/f-mart-grocer/id6462783122', label: ' App Store' }
            ],
            featured: false
        },
        {
            name: 'Document Mail',
            tagline: 'Scan, digitize, and send documents globally',
            category: 'Utility',
            icon: '📄',
            color: '#0ea5e9',
            duration: 'Oct 2025 – Dec 2025',
            description: 'Developed a secure document scanning app that converts physical documents to PDF using OCR technology, with encrypted storage and worldwide document delivery capabilities.',
            highlights: ['OCR Scanning', 'PDF Generation', 'Encrypted Storage', 'Global Delivery'],
            tech: ['Flutter', 'OCR', 'PDF Generation', 'Encryption'],
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.documentmail.app', label: '▶ Play Store' },
                { url: 'https://apps.apple.com/in/app/document-mail/id6746794341', label: ' App Store' }
            ],
            featured: false
        },
        {
            name: 'Check Mail',
            tagline: 'Digital check payments made simple',
            category: 'FinTech',
            icon: '✉️',
            color: '#6366f1',
            duration: 'Aug 2025 – Sep 2025',
            description: 'Created a digital check and eCheck platform that lets users send checks via email or mail using bank accounts or cards, with secure payment workflows and full compliance integration.',
            highlights: ['Digital Checks', 'Email/Mail Delivery', 'Bank & Card Support', 'Compliance Ready'],
            tech: ['Flutter', 'eCheck', 'Secure Payments'],
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.checkmail.app', label: '▶ Play Store' },
                { url: 'https://apps.apple.com/in/app/check-mail/id6748264295', label: ' App Store' }
            ],
            featured: false
        },
        {
            name: 'Payroll by Card',
            tagline: 'Fund payroll with business credit cards',
            category: 'FinTech',
            icon: '💰',
            color: '#6366f1',
            duration: 'Aug 2025 – Oct 2025',
            description: 'Built a FinTech payroll platform enabling small businesses to fund payroll using business credit cards via ACH or wire, with seamless integrations into existing accounting and payroll systems.',
            highlights: ['Credit Card Funding', 'ACH/Wire Support', 'Accounting Integration', 'Mobile-First'],
            tech: ['Flutter', 'FinTech', 'ACH/Wire'],
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.payrollbycard.mob', label: '▶ Play Store' },
                { url: 'https://apps.apple.com/in/app/payroll-by-card/id6756771711', label: ' App Store' }
            ],
            featured: false
        },
        {
            name: 'GetPaid Link',
            tagline: 'Collect payments via shareable links',
            category: 'FinTech',
            icon: '🔗',
            color: '#6366f1',
            duration: 'Apr 2025 – May 2025',
            description: 'Developed a secure payment link platform for businesses to collect one-time or recurring payments via email or SMS — no app installation required. Fully PCI-compliant with instant notification support.',
            highlights: ['Payment Links', 'Recurring Billing', 'PCI Compliant', 'No App Required'],
            tech: ['Flutter', 'Payment Links', 'PCI Compliance'],
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.getpaidlink.app', label: '▶ Play Store' },
                { url: 'https://apps.apple.com/in/app/getpaid-link/id6755234489', label: ' App Store' }
            ],
            featured: false
        },
        {
            name: 'Zil Foundation',
            tagline: 'Streamlined pension administration platform',
            category: 'Enterprise',
            icon: '🏛️',
            color: '#8b5cf6',
            duration: 'Apr 2024 – Jul 2024',
            description: 'Implemented a pensioner management and reporting application with detailed report generation, secure local data storage, and workflows that improved operational efficiency and accuracy in pension administration.',
            highlights: ['Pension Reports', 'Secure Storage', 'Status Tracking', 'Operational Efficiency'],
            tech: ['Flutter', 'Local Storage', 'Reporting'],
            links: [
                { url: 'https://play.google.com/store/apps/details?id=com.benefix.app', label: '▶ Play Store' },
                { url: 'https://apps.apple.com/in/app/zil-foundation/id6742029956', label: ' App Store' }
            ],
            featured: false
        }
    ];

    const featuredProject = projects.find(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects">
            <h3 className="section-title">Featured Projects</h3>
            <p className="projects-subtitle">
                A showcase of apps I've designed & built — from FinTech payment platforms to productivity tools.
            </p>

            {/* Featured Project — Hero Card */}
            {featuredProject && (
                <div className="project-card project-featured" style={{ '--card-accent': featuredProject.color }}>
                    <div className="project-card-inner">
                        <div className="project-header">
                            <span className="project-icon">{featuredProject.icon}</span>
                            <div>
                                <span className="project-category" style={{ '--cat-color': featuredProject.color }}>
                                    {featuredProject.category}
                                </span>
                                <h4 className="project-name">{featuredProject.name}</h4>
                                <p className="project-tagline">{featuredProject.tagline}</p>
                            </div>
                            <span className="project-duration">{featuredProject.duration}</span>
                        </div>

                        <p className="project-description">{featuredProject.description}</p>

                        <div className="project-highlights">
                            {featuredProject.highlights.map((h, i) => (
                                <span key={i} className="project-highlight-tag">✦ {h}</span>
                            ))}
                        </div>

                        <div className="project-footer">
                            <div className="project-tech-stack">
                                {featuredProject.tech.map((t, i) => (
                                    <span key={i} className="project-tech-pill">{t}</span>
                                ))}
                            </div>
                            {featuredProject.links.length > 0 && (
                                <div className="project-links">
                                    {featuredProject.links.map((link, i) => (
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Other Projects Grid */}
            <div className="projects-grid">
                {otherProjects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        style={{ '--card-accent': project.color, animationDelay: `${index * 0.06}s` }}
                    >
                        <div className="project-card-inner">
                            <div className="project-header">
                                <span className="project-icon">{project.icon}</span>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <span className="project-category" style={{ '--cat-color': project.color }}>
                                            {project.category}
                                        </span>
                                        <span className="project-duration">{project.duration}</span>
                                    </div>
                                    <h4 className="project-name">{project.name}</h4>
                                    <p className="project-tagline">{project.tagline}</p>
                                </div>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-highlights">
                                {project.highlights.map((h, i) => (
                                    <span key={i} className="project-highlight-tag">✦ {h}</span>
                                ))}
                            </div>

                            <div className="project-footer">
                                <div className="project-tech-stack">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="project-tech-pill">{t}</span>
                                    ))}
                                </div>
                                {project.links.length > 0 && (
                                    <div className="project-links">
                                        {project.links.map((link, i) => (
                                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
