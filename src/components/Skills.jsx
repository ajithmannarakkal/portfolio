import React from 'react';
import {
    FaAndroid, FaApple, FaGitAlt, FaCheckDouble, FaCubes, FaBolt, FaFigma,
    FaCreditCard, FaLayerGroup, FaMobileAlt, FaTools, FaCloud, FaRocket,
    FaShieldAlt, FaDatabase, FaBug, FaGlobe, FaCodeBranch, FaLock,
    FaPaintBrush, FaCogs, FaBoxOpen, FaSyncAlt, FaNetworkWired,
    FaClipboardCheck, FaChartLine, FaStopwatch, FaRegFileCode, FaCode
} from 'react-icons/fa';
import {
    SiFlutter, SiDart, SiFirebase, SiGooglemaps, SiPostman,
    SiAndroidstudio, SiJira, SiFigma,
    SiGoogleplay, SiAppstore
} from 'react-icons/si';
import {
    TbBrandReason, TbBellRinging, TbDeviceMobileCode, TbLayoutGrid,
    TbTestPipe, TbBrandSpeedtest
} from 'react-icons/tb';
import {
    MdAnimation, MdOutlineSecurity, MdWidgets, MdOutlineSpeed,
    MdOutlineStorage, MdOutlineCached
} from 'react-icons/md';
import {
    BiNetworkChart
} from 'react-icons/bi';

const highlights = [
    { label: '3+ Years Flutter Development', icon: <FaRocket /> },
    { label: '10+ Production Mobile Apps', icon: <FaMobileAlt /> },
    { label: 'FinTech Domain Experience', icon: <FaCreditCard /> },
    { label: 'Cross-Platform Development', icon: <FaGlobe /> },
];

const skillCategories = [
    {
        title: 'Flutter & Mobile Development',
        icon: <SiFlutter size={22} />,
        color: '#02569B',
        skills: [
            { name: 'Flutter', icon: <SiFlutter size={26} color="#02569B" /> },
            { name: 'Dart', icon: <SiDart size={26} color="#0175C2" /> },
            { name: 'Android', icon: <FaAndroid size={26} color="#3DDC84" /> },
            { name: 'iOS', icon: <FaApple size={26} color="#555" /> },
            { name: 'Cross-Platform', icon: <TbDeviceMobileCode size={26} color="#6C63FF" /> },
            { name: 'Responsive UI', icon: <FaMobileAlt size={26} color="#0288D1" /> },
            { name: 'Adaptive Layouts', icon: <TbLayoutGrid size={26} color="#00897B" /> },
            { name: 'Custom Widgets', icon: <MdWidgets size={26} color="#7B1FA2" /> },
            { name: 'Animations', icon: <MdAnimation size={26} color="#E91E63" /> },
            { name: 'Material & Cupertino', icon: <FaPaintBrush size={26} color="#FF7043" /> },
            { name: 'Platform Channels', icon: <BiNetworkChart size={26} color="#5C6BC0" /> },
            { name: 'App Lifecycle', icon: <FaSyncAlt size={26} color="#43A047" /> },
            { name: 'Performance Optimization', icon: <MdOutlineSpeed size={26} color="#F57C00" /> },
            { name: 'DevTools Profiling', icon: <FaChartLine size={26} color="#0097A7" /> },
            { name: 'Startup Optimization', icon: <FaStopwatch size={26} color="#C62828" /> },
        ]
    },
    {
        title: 'Architecture & State Management',
        icon: <FaLayerGroup size={22} />,
        color: '#4CAF50',
        skills: [
            { name: 'Clean Architecture', icon: <FaLayerGroup size={26} color="#4CAF50" /> },
            { name: 'MVVM', icon: <FaCubes size={26} color="#607D8B" /> },
            { name: 'SOLID Principles', icon: <FaCheckDouble size={26} color="#2E7D32" /> },
            { name: 'Repository Pattern', icon: <FaBoxOpen size={26} color="#5D4037" /> },
            { name: 'Dependency Injection', icon: <FaCogs size={26} color="#37474F" /> },
            { name: 'Provider', icon: <FaCubes size={26} color="#7209B7" /> },
            { name: 'Riverpod', icon: <FaLayerGroup size={26} color="#00BCD4" /> },
            { name: 'BLoC Pattern', icon: <FaCubes size={26} color="#0052CC" /> },
            { name: 'GetX', icon: <FaBolt size={26} color="#FFD600" /> },
            { name: 'Modular Structure', icon: <FaCodeBranch size={26} color="#8D6E63" /> },
        ]
    },
    {
        title: 'Backend, APIs & Networking',
        icon: <FaCloud size={22} />,
        color: '#0288D1',
        skills: [
            { name: 'REST API', icon: <FaNetworkWired size={26} color="#0288D1" /> },
            { name: 'API Error Handling', icon: <FaBug size={26} color="#E53935" /> },
            { name: 'Dio / HTTP', icon: <FaCloud size={26} color="#0097A7" /> },
            { name: 'JSON Serialization', icon: <FaRegFileCode size={26} color="#795548" /> },
            { name: 'Firebase Auth', icon: <SiFirebase size={26} color="#FFA000" /> },
            { name: 'Firestore', icon: <SiFirebase size={26} color="#FFCA28" /> },
            { name: 'FCM', icon: <TbBellRinging size={26} color="#FF6F00" /> },
            { name: 'Push Notifications', icon: <TbBellRinging size={26} color="#AB47BC" /> },
            { name: 'Google Maps', icon: <SiGooglemaps size={26} color="#4285F4" /> },
            { name: 'Third-Party APIs', icon: <FaGlobe size={26} color="#00ACC1" /> },
        ]
    },
    {
        title: 'Local Data Storage',
        icon: <FaDatabase size={22} />,
        color: '#6D4C41',
        skills: [
            { name: 'Hive', icon: <FaDatabase size={26} color="#FFC107" /> },
            { name: 'SQLite', icon: <FaDatabase size={26} color="#003B57" /> },
            { name: 'SharedPreferences', icon: <MdOutlineStorage size={26} color="#8D6E63" /> },
            { name: 'Secure Storage', icon: <FaLock size={26} color="#5C6BC0" /> },
            { name: 'Offline Persistence', icon: <FaDatabase size={26} color="#2E7D32" /> },
            { name: 'Data Caching', icon: <MdOutlineCached size={26} color="#0097A7" /> },
        ]
    },
    {
        title: 'App Security',
        icon: <FaShieldAlt size={22} />,
        color: '#D32F2F',
        skills: [
            { name: 'Token Storage', icon: <FaLock size={26} color="#C62828" /> },
            { name: 'Auth & Authorization', icon: <MdOutlineSecurity size={26} color="#6A1B9A" /> },
            { name: 'API Security', icon: <FaShieldAlt size={26} color="#1565C0" /> },
            { name: 'Secure Networking', icon: <FaNetworkWired size={26} color="#00695C" /> },
        ]
    },
    {
        title: 'FinTech Systems',
        icon: <FaCreditCard size={22} />,
        color: '#1565C0',
        skills: [
            { name: 'Payment Gateways', icon: <FaCreditCard size={26} color="#2E7D32" /> },
            { name: 'ACH Transfers', icon: <FaCreditCard size={26} color="#1565C0" /> },
            { name: 'Wire Processing', icon: <FaCreditCard size={26} color="#F57C00" /> },
            { name: 'Virtual Cards', icon: <FaCreditCard size={26} color="#7B1FA2" /> },
            { name: 'eCheck Processing', icon: <FaCreditCard size={26} color="#546E7A" /> },
            { name: 'Transaction Workflows', icon: <FaSyncAlt size={26} color="#00838F" /> },
            { name: 'Secure Payments', icon: <FaShieldAlt size={26} color="#C62828" /> },
        ]
    },
    {
        title: 'Testing & Debugging',
        icon: <TbTestPipe size={22} />,
        color: '#E65100',
        skills: [
            { name: 'Unit Testing', icon: <FaClipboardCheck size={26} color="#4CAF50" /> },
            { name: 'Widget Testing', icon: <FaClipboardCheck size={26} color="#0288D1" /> },
            { name: 'Integration Testing', icon: <FaClipboardCheck size={26} color="#7B1FA2" /> },
            { name: 'Debug & Profiling', icon: <FaBug size={26} color="#E65100" /> },
        ]
    },
    {
        title: 'Deployment & Release',
        icon: <FaRocket size={22} />,
        color: '#00897B',
        skills: [
            { name: 'Play Store', icon: <SiGoogleplay size={26} color="#3DDC84" /> },
            { name: 'App Store', icon: <SiAppstore size={26} color="#0D96F6" /> },
            { name: 'Build Flavors', icon: <FaCogs size={26} color="#5D4037" /> },
            { name: 'Env Configuration', icon: <FaTools size={26} color="#607D8B" /> },
            { name: 'Version Management', icon: <FaCodeBranch size={26} color="#37474F" /> },
        ]
    },
    {
        title: 'Tools & Workflow',
        icon: <FaTools size={22} />,
        color: '#455A64',
        skills: [
            { name: 'Git', icon: <FaGitAlt size={26} color="#F05032" /> },
            { name: 'GitHub', icon: <FaCodeBranch size={26} color="#333" /> },
            { name: 'CI/CD', icon: <FaSyncAlt size={26} color="#4CAF50" /> },
            { name: 'Agile / Scrum', icon: <FaClipboardCheck size={26} color="#0288D1" /> },
            { name: 'Jira', icon: <SiJira size={26} color="#0052CC" /> },
            { name: 'Postman', icon: <SiPostman size={26} color="#FF6C37" /> },
            { name: 'Android Studio', icon: <SiAndroidstudio size={26} color="#3DDC84" /> },
            { name: 'VS Code', icon: <FaCode size={26} color="#007ACC" /> },
            { name: 'Figma', icon: <SiFigma size={26} color="#F24E1E" /> },
            { name: 'Pub.dev Ecosystem', icon: <SiDart size={26} color="#0175C2" /> },
        ]
    },
];

const styles = {
    wrapper: {
        backgroundColor: 'white',
        width: '100%',
    },
    highlightsRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '3rem',
    },
    highlightCard: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem 1.25rem',
        background: 'linear-gradient(135deg, rgba(0, 95, 115, 0.06) 0%, rgba(0, 95, 115, 0.02) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(0, 95, 115, 0.12)',
    },
    highlightIcon: {
        color: 'var(--accent-color)',
        fontSize: '1.25rem',
        flexShrink: 0,
    },
    highlightLabel: {
        fontSize: '0.9rem',
        fontWeight: 600,
        color: 'var(--text-color)',
        lineHeight: 1.3,
    },
    categoriesGrid: {
        display: 'grid',
        gap: '2.5rem',
    },
    categoryCard: {
        background: 'var(--card-bg)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
    },
    categoryHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1.25rem 1.5rem',
        borderBottom: '1px solid var(--border-color)',
    },
    categoryIconBox: (color) => ({
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        backgroundColor: `${color}12`,
        color: color,
        flexShrink: 0,
    }),
    categoryTitle: {
        fontSize: '1.1rem',
        fontWeight: 700,
        margin: 0,
        color: 'var(--text-color)',
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '0.5rem',
        padding: '1.25rem',
    },
    skillItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '1rem 0.5rem',
        borderRadius: '10px',
        backgroundColor: 'var(--bg-color)',
        border: '1px solid transparent',
        transition: 'all 0.2s ease',
        cursor: 'default',
        textAlign: 'center',
    },
    skillName: {
        fontSize: '0.78rem',
        fontWeight: 500,
        color: 'var(--text-secondary)',
        lineHeight: 1.3,
    },
};

const Skills = () => {
    return (
        <div style={styles.wrapper}>
            <section id="skills">
                <h3 className="section-title">Technical Skills</h3>

                {/* Highlight Badges */}
                <div style={styles.highlightsRow}>
                    {highlights.map((h, i) => (
                        <div key={i} style={styles.highlightCard}>
                            <span style={styles.highlightIcon}>{h.icon}</span>
                            <span style={styles.highlightLabel}>{h.label}</span>
                        </div>
                    ))}
                </div>

                {/* Skill Categories */}
                <div style={styles.categoriesGrid}>
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            style={styles.categoryCard}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.07)'}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                        >
                            <div style={styles.categoryHeader}>
                                <div style={styles.categoryIconBox(category.color)}>
                                    {category.icon}
                                </div>
                                <h4 style={styles.categoryTitle}>{category.title}</h4>
                            </div>

                            <div style={styles.skillsGrid}>
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        style={styles.skillItem}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.borderColor = 'var(--border-color)';
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.borderColor = 'transparent';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        {skill.icon}
                                        <span style={styles.skillName}>{skill.name}</span>
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
