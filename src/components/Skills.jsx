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
                { name: 'Theming', icon: <FaFigma size={30} color="#F24E1E" /> },
                { name: 'Localization', icon: <FaGlobe size={30} color="#4CAF50" /> },
            ]
        },
        {
            title: "Architecture & State Management",
            icon: <FaLayerGroup size={24} color="var(--accent-color)" />,
            skills: [
                { name: 'Clean Arch', icon: <TbSdk size={30} color="#4CAF50" /> },
                { name: 'MVVM / MVC', icon: <FaLayerGroup size={30} color="#607D8B" /> },
                { name: 'Riverpod', icon: <FaLayerGroup size={30} color="#2D2D2D" /> }, // Generic icon fallback
                { name: 'Provider', icon: <FaCubes size={30} color="#7209B7" /> },
                { name: 'GetX', icon: <FaBolt size={30} color="#FFD700" /> },
                { name: 'Files / Flavors', icon: <FaTools size={30} color="#795548" /> },
            ]
        },
        {
            title: "Backend, Data & Networking",
            icon: <FaCloud size={24} color="var(--accent-color)" />,
            skills: [
                { name: 'Firebase', icon: <SiFirebase size={30} color="#FFCA28" /> },
                { name: 'Google Auth', icon: <FaGoogle size={30} color="#DB4437" /> },
                { name: 'Push Notif.', icon: <TbBellRinging size={30} color="#FFD700" /> },
                { name: 'REST APIs', icon: <SiGooglecloud size={30} color="#4285F4" /> },
                { name: 'Dio / Http', icon: <FaCloud size={30} color="#0288D1" /> },
                { name: 'Hive / SQLite', icon: <FaDatabase size={30} color="#003B57" /> },
                { name: 'Google Maps', icon: <SiGooglemaps size={30} color="#4285F4" /> },
                { name: 'Payments', icon: <FaCreditCard size={30} color="#ff9800" /> },
            ]
        },
        {
            title: "Tools, DevOps & Deployment",
            icon: <FaTools size={24} color="var(--accent-color)" />,
            skills: [
                { name: 'Git / GitHub', icon: <FaGitAlt size={30} color="#F05032" /> },
                { name: 'AI Tools', icon: <FaRobot size={30} color="#333" /> },
                { name: 'Crashlytics', icon: <FaBug size={30} color="#F44336" /> },
                { name: 'Bitbucket', icon: <SiBitbucket size={30} color="#0052CC" /> },
                { name: 'Jira', icon: <SiJira size={30} color="#0052CC" /> },
                { name: 'Postman', icon: <SiPostman size={30} color="#FF6C37" /> },
                { name: 'Android Studio', icon: <SiAndroidstudio size={30} color="#3DDC84" /> },
                { name: 'XCode', icon: <SiXcode size={30} color="#1575F9" /> },
            ]
        }
    ];

    return (
        <section id="skills" style={{ backgroundColor: 'white', padding: '4rem 0' }}>
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
    );
};

export default Skills;
