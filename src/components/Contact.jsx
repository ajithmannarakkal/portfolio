import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ textAlign: 'center', margin: '4rem auto' }}>
            <h3 className="section-title" style={{ borderBottom: 'none', marginBottom: '1rem' }}>Let's Work Together</h3>
            <p style={{ maxWidth: '500px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
                I'm always open to discussing new FinTech projects and opportunities.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Phone</div>
                    <div>+91 8129953094</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Email</div>
                    <div>mannarakkalajith@gmail.com</div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="mailto:mannarakkalajith@gmail.com" className="btn">Email Me</a>
                <a href="https://www.linkedin.com/in/ajith-m-051159227" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-color)' }}>
                    LinkedIn
                </a>
                <a href="https://github.com/ajithmannarakkal" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-color)' }}>
                    GitHub
                </a>
            </div>

            <div style={{ marginTop: '4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <p>&copy; {new Date().getFullYear()} Ajith M. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Contact;
