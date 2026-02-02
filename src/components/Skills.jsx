import React from 'react';
import { FaAndroid, FaApple, FaGitAlt, FaCheckDouble, FaCubes, FaBolt, FaFigma, FaDatabase, FaCreditCard, FaLayerGroup, FaMobileAlt, FaTools, FaCloud, FaGlobe, FaGoogle, FaRobot, FaBug } from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase, SiGooglemaps, SiPostman, SiXcode, SiAndroidstudio, SiGooglecloud, SiJira, SiBitbucket } from 'react-icons/si';
import { TbSdk, TbBrandReason, TbBellRinging } from 'react-icons/tb';

const Skills = () => {
    const skillCategories = [
        {
            title: "Flutter & Mobile Core",
            icon: <FaMobileAlt size={24} color="var(--accent-color)" />,
            skills: [
                { name: 'Flutter', icon: <SiFlutter size={30} color="#02569B" /> },
                { name: 'Dart', icon: <SiDart size={30} color="#0175C2" /> },
                { name: 'Android', icon: <FaAndroid size={30} color="#3DDC84" /> },
                { name: 'iOS', icon: <FaApple size={30} color="#000000" /> },
                { name: 'Responsive UI', icon: <FaMobileAlt size={30} color="#555" /> },
                { name: 'Custom Widgets', icon: <SiFlutter size={30} color="#777" /> },
            ]
        },
        {
            title: "Architecture & State Management",
            icon: <FaLayerGroup size={24} color="var(--accent-color)" />,
            skills: [
                { name: 'Clean Arch', icon: <TbSdk size={30} color="#4CAF50" /> },
                { name: 'MVVM', icon: <FaLayerGroup size={30} color="#607D8B" /> },
                { name: 'SOLID Principles', icon: <FaCheckDouble size={30} color="#4CAF50" /> },
                { name: 'Riverpod', icon: <FaLayerGroup size={30} color="#2D2D2D" /> },
                { name: 'Provider', icon: <FaCubes size={30} color="#7209B7" /> },
                { name: 'GetX', icon: <FaBolt size={30} color="#FFD700" /> },
                { name: 'BLoC', icon: <FaCubes size={30} color="#0052CC" /> },
            ]
        },
        {
            title: "Backend, Data & Networking",
            icon: <FaCloud size={24} color="var(--accent-color)" />,
            skills: [
                { name: 'Firebase', icon: <SiFirebase size={30} color="#FFCA28" /> },
                { name: 'REST APIs', icon: <SiGooglecloud size={30} color="#4285F4" /> },
                { name: 'Dio', icon: <FaCloud size={30} color="#0288D1" /> },
                { name: 'JSON Parsing', icon: <FaTools size={30} color="#795548" /> },
                { name: 'Google Maps', icon: <SiGooglemaps size={30} color="#4285F4" /> },
                { name: 'Push Notif.', icon: <TbBellRinging size={30} color="#FFD700" /> },
            ]
        },
        {
            title: "FinTech Systems",
            icon: <FaCreditCard size={24} color="var(--accent-color)" />,
            skills: [
                { name: 'Payment Gateways', icon: <FaCreditCard size={30} color="#4CAF50" /> },
                { name: 'ACH Transfers', icon: <FaCreditCard size={30} color="#2196F3" /> },
                { name: 'Wire Processing', icon: <FaCreditCard size={30} color="#FF9800" /> },
                { name: 'Virtual Cards', icon: <FaCreditCard size={30} color="#9C27B0" /> },
                { name: 'eChecks', icon: <FaCreditCard size={30} color="#607D8B" /> },
            ]
        },
        {
            title: "Tools & DevOps",
            icon: <FaTools size={24} color="var(--accent-color)" />,
            skills: [
                { name: 'Git / GitHub', icon: <FaGitAlt size={30} color="#F05032" /> },
                { name: 'CI/CD', icon: <FaTools size={30} color="#4CAF50" /> },
                { name: 'Agile / Scrum', icon: <FaTools size={30} color="#2196F3" /> },
                { name: 'Jira', icon: <SiJira size={30} color="#0052CC" /> },
                { name: 'Postman', icon: <SiPostman size={30} color="#FF6C37" /> },
                { name: 'Android Studio', icon: <SiAndroidstudio size={30} color="#3DDC84" /> },
            ]
        }
    ];

    return (
        <div style={{ backgroundColor: 'white', width: '100%' }}>
            <section id="skills">
                <h3 className="section-title">Technical Skills</h3>

                <div style={{ display: 'grid', gap: '3rem' }}>
                    {skillCategories.map((category, idx) => (
                        <div key={idx}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                marginBottom: '1.5rem',
                                paddingBottom: '0.5rem',
                                borderBottom: '2px solid #f0f0f0'
                            }}>
                                {category.icon}
                                <h4 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-color)' }}>{category.title}</h4>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                                gap: '1.5rem'
                            }}>
                                {category.skills.map((skill, index) => (
                                    <div key={index} style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.2rem',
                                        backgroundColor: 'var(--bg-color)',
                                        borderRadius: '8px',
                                        border: '1px solid var(--border-color)',
                                        transition: 'transform 0.2s',
                                        cursor: 'default',
                                        textAlign: 'center'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        <div style={{ marginBottom: '0.6rem' }}>{skill.icon}</div>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;
