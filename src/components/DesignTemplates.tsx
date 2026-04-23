import type { ResumeData } from '../types/resume';
import './DesignTemplates.css';

export type DesignId = 
  | 'modern' | 'classic' | 'creative' | 'minimalist'
  | 'cyber' | 'glass' | 'gradient' | 'neon' | 'matrix' | 'hologram'
  | 'tech' | 'developer' | 'startup' | 'executive' | 'artistic'
  | 'geometric' | 'tech-dark' | 'glassmorphism' | 'cyberpunk' | 'future'
  | 'elegant' | 'corporate' | 'bold' | 'smart'
  | 'premium-elite' | 'premium-luxury' | 'premium-executive';

interface Props {
  data: ResumeData;
  design: DesignId;
}

const designs: Record<DesignId, React.FC<{ data: ResumeData }>> = {
  modern: ModernDesign,
  classic: ClassicDesign,
  creative: CreativeDesign,
  minimalist: MinimalistDesign,
  cyber: CyberDesign,
  glass: GlassDesign,
  gradient: GradientDesign,
  neon: NeonDesign,
  matrix: MatrixDesign,
  hologram: HologramDesign,
  tech: TechDesign,
  developer: DeveloperDesign,
  startup: StartupDesign,
  executive: ExecutiveDesign,
  artistic: ArtisticDesign,
  geometric: GeometricDesign,
  'tech-dark': TechDarkDesign,
  glassmorphism: GlassmorphismDesign,
  cyberpunk: CyberpunkDesign,
  future: FutureDesign,
  elegant: ElegantDesign,
  corporate: CorporateDesign,
  bold: BoldDesign,
  smart: SmartDesign,
  'premium-elite': PremiumEliteDesign,
  'premium-luxury': PremiumLuxuryDesign,
  'premium-executive': PremiumExecutiveDesign,
};

export function ResumePreview({ data, design }: Props) {
  const DesignComponent = designs[design];
  return <DesignComponent data={data} />;
}

export const designInfo: { id: DesignId; name: string; description: string; colors: string[] }[] = [
  { id: 'modern', name: 'Moderno', description: 'Layout profissional com sidebar', colors: ['#2563eb', '#eff6ff'] },
  { id: 'classic', name: 'Clássico', description: 'Estilo tradicional elegante', colors: ['#1e293b', '#e2e8f0'] },
  { id: 'creative', name: 'Criativo', description: 'Cores vibrantes e gradiente', colors: ['#667eea', '#f0f4ff'] },
  { id: 'minimalist', name: 'Minimalista', description: 'clean e sofisticado', colors: ['#1e293b', '#f1f5f9'] },
  { id: 'cyber', name: 'Cyber', description: 'Futurista estilo cyber', colors: ['#0891b2', '#ecfeff'] },
  { id: 'glass', name: 'Glass', description: 'Efeito glassmorphism', colors: ['#7c3aed', '#f5f3ff'] },
  { id: 'gradient', name: 'Gradient', description: 'Cores em gradiente', colors: ['#ec4899', '#fdf2f8'] },
  { id: 'neon', name: 'Neon', description: 'Estilo neon brilhante', colors: ['#16a34a', '#f0fdf4'] },
  { id: 'matrix', name: 'Matrix', description: 'Inspirado no Matrix', colors: ['#16a34a', '#f0fdf4'] },
  { id: 'hologram', name: 'Holograma', description: 'Efeito holográfico', colors: ['#0891b2', '#f0f9ff'] },
  { id: 'tech', name: 'Tech', description: 'Estilo tecnológico', colors: ['#3b82f6', '#eff6ff'] },
  { id: 'developer', name: 'Developer', description: 'Para desenvolvedores', colors: ['#0ea5e9', '#f0f9ff'] },
  { id: 'startup', name: 'Startup', description: 'Estilo startup moderna', colors: ['#8b5cf6', '#f5f3ff'] },
  { id: 'executive', name: 'Executivo', description: 'Alta liderança', colors: ['#d97706', '#fffbeb'] },
  { id: 'artistic', name: 'Artístico', description: 'Criativo e artístico', colors: ['#f59e0b', '#fef3c7'] },
  { id: 'geometric', name: 'Geométrico', description: 'Formas geométricas', colors: ['#14b8a6', '#f0fdfa'] },
  { id: 'tech-dark', name: 'Tech Dark', description: 'Tecnologia dark mode', colors: ['#6366f1', '#eef2ff'] },
  { id: 'glassmorphism', name: 'Glassmorphism', description: 'Transparente moderno', colors: ['#c026d3', '#fdf4ff'] },
  { id: 'cyberpunk', name: 'Cyberpunk', description: 'Estilo cyberpunk', colors: ['#db2777', '#fdf2f8'] },
  { id: 'future', name: 'Futurista', description: 'Design do futuro', colors: ['#16a34a', '#f0fdf4'] },
  { id: 'elegant', name: 'Elegante', description: 'Sofisticação total', colors: ['#ea580c', '#fff7ed'] },
  { id: 'corporate', name: 'Corporativo', description: 'Profissional corporativo', colors: ['#2563eb', '#eff6ff'] },
  { id: 'bold', name: 'Destacado', description: 'Visual impactante', colors: ['#dc2626', '#fef2f2'] },
  { id: 'smart', name: 'Inteligente', description: 'Clean e inteligente', colors: ['#059669', '#ecfdf5'] },
  { id: 'premium-elite', name: '⭐ Elite', description: 'Design premium de elite', colors: ['#0f172a', '#1e3a8a'] },
  { id: 'premium-luxury', name: '⭐ Luxury', description: 'Sofisticação máxima', colors: ['#18181b', '#78716c'] },
  { id: 'premium-executive', name: '⭐ Executive', description: 'Para executivos', colors: ['#1c1917', '#92400e'] },
];

function ModernDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills, languages } = data;
  return (
    <div className="resume design-modern">
      <div className="resume-sidebar">
        <div className="sidebar-header">
          <h1>{personalInfo.name || 'Seu Nome'}</h1>
          <p className="title">{personalInfo.title || 'Seu Cargo'}</p>
        </div>
        <div className="sidebar-section">
          <h3>Contato</h3>
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.location && <p>{personalInfo.location}</p>}
          {personalInfo.linkedin && <p>{personalInfo.linkedin}</p>}
        </div>
        {skills.length > 0 && (
          <div className="sidebar-section">
            <h3>Habilidades</h3>
            <div className="skills-list">
              {skills.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
            </div>
          </div>
        )}
        {languages.length > 0 && (
          <div className="sidebar-section">
            <h3>Idiomas</h3>
            {languages.map((lang, i) => <p key={i}>{lang.language} - {lang.level}</p>)}
          </div>
        )}
      </div>
      <div className="resume-main">
        {personalInfo.summary && <section><h2>Resumo Profissional</h2><p>{personalInfo.summary}</p></section>}
        {experience.length > 0 && (
          <section>
            <h2>Experiência</h2>
            {experience.map((exp, i) => (
              <div key={i} className="experience-item">
                <div className="item-header"><h3>{exp.position || 'Cargo'}</h3><span>{exp.startDate} - {exp.current ? 'Atual' : exp.endDate}</span></div>
                <p className="company">{exp.company || 'Empresa'}</p>
                <p className="description">{exp.description}</p>
              </div>
            ))}
          </section>
        )}
        {education.length > 0 && (
          <section>
            <h2>Educação</h2>
            {education.map((edu, i) => (
              <div key={i} className="education-item">
                <div className="item-header"><h3>{edu.degree || 'Grau'}</h3><span>{edu.endDate}</span></div>
                <p className="institution">{edu.institution || 'Instituição'}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

function ClassicDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills, languages } = data;
  return (
    <div className="resume design-classic">
      <header>
        <h1>{personalInfo.name || 'Seu Nome'}</h1>
        <p className="title">{personalInfo.title || 'Seu Cargo'}</p>
        <div className="contact-line">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span> | {personalInfo.phone}</span>}
          {personalInfo.location && <span> | {personalInfo.location}</span>}
        </div>
      </header>
      {personalInfo.summary && <section><h2>Resumo</h2><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && (
        <section>
          <h2>Experiência</h2>
          {experience.map((exp, i) => (
            <div key={i} className="experience-item">
              <div className="item-header"><h3>{exp.position}</h3><span>{exp.startDate} - {exp.current ? 'Atual' : exp.endDate}</span></div>
              <p className="company">{exp.company}</p>
            </div>
          ))}
        </section>
      )}
      {education.length > 0 && <section><h2>Educação</h2>{education.map((e, i) => <p key={i}>{e.degree} - {e.institution}</p>)}</section>}
      {skills.length > 0 && <section><h2>Habilidades</h2><p>{skills.join(', ')}</p></section>}
    </div>
  );
}

function CreativeDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills, languages } = data;
  return (
    <div className="resume design-creative">
      <div className="creative-header">
        <h1>{personalInfo.name || 'Seu Nome'}</h1>
        <p className="title">{personalInfo.title || 'Seu Cargo'}</p>
        <div className="contact-info">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
        </div>
      </div>
      {personalInfo.summary && <section><h2>Sobre</h2><p>{personalInfo.summary}</p></section>}
      <div className="creative-columns">
        <div className="col-main">
          {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
          {education.length > 0 && <section><h2>Formação</h2>{education.map((e, i) => <div key={i}><h3>{e.degree}</h3><p>{e.institution}</p></div>)}</section>}
        </div>
        <div className="col-side">
          {skills.length > 0 && <section><h2>Skills</h2><div className="skills-tags">{skills.map((s, i) => <span key={i}>{s}</span>)}</div></section>}
        </div>
      </div>
    </div>
  );
}

function MinimalistDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-minimalist">
      <header>
        <h1>{personalInfo.name || 'Seu Nome'}</h1>
        <p className="title">{personalInfo.title || 'Seu Cargo'}</p>
        <div className="contact-row">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
        </div>
      </header>
      {personalInfo.summary && <section><p className="summary-text">{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {education.length > 0 && <section><h2>Formação</h2>{education.map((e, i) => <div key={i}><h3>{e.degree}</h3><p>{e.institution}</p></div>)}</section>}
      {skills.length > 0 && <section><p>{skills.join(' • ')}</p></section>}
    </div>
  );
}

function CyberDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-cyber">
      <div className="cyber-header">
        <div className="cyber-line"></div>
        <h1>{personalInfo.name || 'SEU NOME'}</h1>
        <p className="title">{personalInfo.title || 'SEU CARGO'}</p>
        <div className="cyber-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
        </div>
      </div>
      <div className="cyber-body">
        {personalInfo.summary && <section><h2>// RESUMO</h2><p>{personalInfo.summary}</p></section>}
        {experience.length > 0 && <section><h2>// EXPERIÊNCIA</h2>{experience.map((e, i) => <div key={i} className="cyber-item"><h3>{e.position}</h3><p>{e.company} | {e.startDate}-{e.current ? 'Atual' : e.endDate}</p></div>)}</section>}
        {education.length > 0 && <section><h2>// FORMAÇÃO</h2>{education.map((e, i) => <div key={i}><h3>{e.degree}</h3><p>{e.institution}</p></div>)}</section>}
        {skills.length > 0 && <section><h2>// SKILLS</h2><div className="cyber-skills">{skills.map((s, i) => <span key={i}>{s}</span>)}</div></section>}
      </div>
    </div>
  );
}

function GlassDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-glass">
      <div className="glass-sidebar">
        <div className="glass-avatar"></div>
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p className="title">{personalInfo.title || 'Cargo'}</p>
        <div className="glass-contact">
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
        </div>
        {skills.length > 0 && <div className="glass-skills"><h3>Skills</h3>{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
      </div>
      <div className="glass-main">
        {personalInfo.summary && <section><h2>Sobre</h2><p>{personalInfo.summary}</p></section>}
        {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
        {education.length > 0 && <section><h2>Formação</h2>{education.map((e, i) => <div key={i}><h3>{e.degree}</h3><p>{e.institution}</p></div>)}</section>}
      </div>
    </div>
  );
}

function GradientDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-gradient">
      <div className="gradient-header">
        <h1>{personalInfo.name || 'Seu Nome'}</h1>
        <p>{personalInfo.title || 'Seu Cargo'}</p>
        <div className="gradient-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
        </div>
      </div>
      <div className="gradient-body">
        {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
        {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
        {education.length > 0 && <section><h2>Formação</h2>{education.map((e, i) => <div key={i}><h3>{e.degree}</h3><p>{e.institution}</p></div>)}</section>}
        {skills.length > 0 && <div className="gradient-skills">{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
      </div>
    </div>
  );
}

function NeonDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-neon">
      <div className="neon-header">
        <h1>{personalInfo.name || 'NOME'}</h1>
        <p>{personalInfo.title || 'CARGO'}</p>
        {personalInfo.email && <span>{personalInfo.email}</span>}
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>EXP</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <div className="neon-skills">{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
    </div>
  );
}

function MatrixDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-matrix">
      <div className="matrix-header">
        <h1>{personalInfo.name || 'NOME'}</h1>
        <p>{personalInfo.title || 'CARGO'}</p>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>EXPERIÊNCIA</h2>{experience.map((e, i) => <div key={i}><span>{e.position}</span><span>{e.company}</span></div>)}</section>}
      {skills.length > 0 && <section><h2>SKILLS</h2><p>{skills.join(' | ')}</p></section>}
    </div>
  );
}

function HologramDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-hologram">
      <div className="hologram-header">
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p>{personalInfo.title || 'Cargo'}</p>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <div className="hologram-skills">{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
    </div>
  );
}

function TechDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-tech">
      <div className="tech-header">
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p>{personalInfo.title || 'Cargo'}</p>
        <div className="tech-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
        </div>
      </div>
      {personalInfo.summary && <section><h2>Sobre</h2><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <div className="tech-skills">{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
    </div>
  );
}

function DeveloperDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-developer">
      <div className="dev-header">
        <h1>{personalInfo.name || 'Dev'}</h1>
        <p>{personalInfo.title || 'Desenvolvedor'}</p>
        {personalInfo.email && <span>{personalInfo.email}</span>}
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experience</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <section><h2>Tech</h2><code>{skills.join(' | ')}</code></section>}
    </div>
  );
}

function StartupDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-startup">
      <div className="startup-header">
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p>{personalInfo.title || 'Cargo'}</p>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <div className="startup-tags">{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
    </div>
  );
}

function ExecutiveDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-executive">
      <div className="exec-header">
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p>{personalInfo.title || 'Cargo'}</p>
        <div className="exec-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
        </div>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {education.length > 0 && <section><h2>Formação</h2>{education.map((e, i) => <div key={i}><h3>{e.degree}</h3><p>{e.institution}</p></div>)}</section>}
    </div>
  );
}

function ArtisticDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, skills } = data;
  return (
    <div className="resume design-artistic">
      <div className="art-header">
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p>{personalInfo.title || 'Cargo'}</p>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <div className="art-tags">{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
    </div>
  );
}

function GeometricDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, skills } = data;
  return (
    <div className="resume design-geometric">
      <div className="geo-header">
        <div className="geo-shape"></div>
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p>{personalInfo.title || 'Cargo'}</p>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <div className="geo-skills">{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
    </div>
  );
}

function TechDarkDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, skills } = data;
  return (
    <div className="resume design-tech-dark">
      <div className="td-header">
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p>{personalInfo.title || 'Cargo'}</p>
        {personalInfo.email && <span>{personalInfo.email}</span>}
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <section><h2>Tech Stack</h2><code>{skills.join(' / ')}</code></section>}
    </div>
  );
}

function GlassmorphismDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, skills } = data;
  return (
    <div className="resume design-glassmorphism">
      <div className="gm-header">
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p>{personalInfo.title || 'Cargo'}</p>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <div className="gm-skills">{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
    </div>
  );
}

function CyberpunkDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, skills } = data;
  return (
    <div className="resume design-cyberpunk">
      <div className="cp-header">
        <h1>{personalInfo.name || 'NOME'}</h1>
        <p>{personalInfo.title || 'CARGO'}</p>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>EXPERIÊNCIA</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <div className="cp-skills">{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
    </div>
  );
}

function FutureDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, skills } = data;
  return (
    <div className="resume design-future">
      <div className="fut-header">
        <h1>{personalInfo.name || 'NOME'}</h1>
        <p>{personalInfo.title || 'CARGO'}</p>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <div className="fut-skills">{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
    </div>
  );
}

function ElegantDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-elegant">
      <div className="eleg-header">
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p>{personalInfo.title || 'Cargo'}</p>
        <div className="eleg-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
        </div>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <section><p>{skills.join(' • ')}</p></section>}
    </div>
  );
}

function CorporateDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills } = data;
  return (
    <div className="resume design-corporate">
      <div className="corp-header">
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p>{personalInfo.title || 'Cargo'}</p>
        <div className="corp-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
        </div>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {education.length > 0 && <section><h2>Formação</h2>{education.map((e, i) => <div key={i}><h3>{e.degree}</h3><p>{e.institution}</p></div>)}</section>}
      {skills.length > 0 && <section><p>{skills.join(', ')}</p></section>}
    </div>
  );
}

function BoldDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, skills } = data;
  return (
    <div className="resume design-bold">
      <div className="bold-header">
        <h1>{personalInfo.name || 'NOME'}</h1>
        <p>{personalInfo.title || 'CARGO'}</p>
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <div className="bold-skills">{skills.map((s, i) => <span key={i}>{s}</span>)}</div>}
    </div>
  );
}

function SmartDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, skills } = data;
  return (
    <div className="resume design-smart">
      <div className="smart-header">
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p>{personalInfo.title || 'Cargo'}</p>
        {personalInfo.email && <span>{personalInfo.email}</span>}
      </div>
      {personalInfo.summary && <section><p>{personalInfo.summary}</p></section>}
      {experience.length > 0 && <section><h2>Experiência</h2>{experience.map((e, i) => <div key={i}><h3>{e.position}</h3><p>{e.company}</p></div>)}</section>}
      {skills.length > 0 && <section><h2>Skills</h2><p>{skills.join(' • ')}</p></section>}
    </div>
  );
}

// ============================================
// PREMIUM DESIGNS - TOP OF THE LINE
// ============================================

function PremiumEliteDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills, languages } = data;
  return (
    <div className="resume design-premium-elite">
      <div className="elite-header">
        <div className="elite-name-block">
          <h1>{personalInfo.name || 'Seu Nome'}</h1>
          <p className="elite-title">{personalInfo.title || 'Seu Cargo'}</p>
        </div>
        <div className="elite-contact">
          {personalInfo.email && <div className="elite-contact-item"><span className="label">Email</span><span>{personalInfo.email}</span></div>}
          {personalInfo.phone && <div className="elite-contact-item"><span className="label">Tel</span><span>{personalInfo.phone}</span></div>}
          {personalInfo.location && <div className="elite-contact-item"><span className="label">Local</span><span>{personalInfo.location}</span></div>}
          {personalInfo.linkedin && <div className="elite-contact-item"><span className="label">LinkedIn</span><span>{personalInfo.linkedin}</span></div>}
        </div>
      </div>
      
      {personalInfo.summary && (
        <div className="elite-section">
          <h2>Perfil Profissional</h2>
          <p className="elite-summary">{personalInfo.summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div className="elite-section">
          <h2>Experiência Profissional</h2>
          {experience.map((exp, i) => (
            <div key={i} className="elite-experience">
              <div className="elite-exp-header">
                <h3>{exp.position || 'Cargo'}</h3>
                <span className="elite-date">{exp.startDate} — {exp.current ? 'Atual' : exp.endDate}</span>
              </div>
              <p className="elite-company">{exp.company || 'Empresa'}</p>
              {exp.description && <p className="elite-desc">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="elite-section">
          <h2>Formação Acadêmica</h2>
          {education.map((edu, i) => (
            <div key={i} className="elite-edu">
              <div className="elite-exp-header">
                <h3>{edu.degree || 'Grau'} {edu.field && `em ${edu.field}`}</h3>
                <span className="elite-date">{edu.endDate}</span>
              </div>
              <p className="elite-company">{edu.institution || 'Instituição'}</p>
            </div>
          ))}
        </div>
      )}

      <div className="elite-footer">
        {skills.length > 0 && (
          <div className="elite-skills">
            <h3>Competências</h3>
            <div className="elite-skill-list">
              {skills.map((skill, i) => <span key={i}>{skill}</span>)}
            </div>
          </div>
        )}
        {languages.length > 0 && (
          <div className="elite-languages">
            <h3>Idiomas</h3>
            {languages.map((lang, i) => <span key={i}>{lang.language} — {lang.level}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

function PremiumLuxuryDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills, languages } = data;
  return (
    <div className="resume design-premium-luxury">
      <div className="luxury-sidebar">
        <div className="luxury-avatar">
          <span>{(personalInfo.name || 'N')[0]}</span>
        </div>
        <h1>{personalInfo.name || 'Nome'}</h1>
        <p className="luxury-title">{personalInfo.title || 'Cargo'}</p>
        
        <div className="luxury-contact-section">
          {personalInfo.email && <div className="luxury-contact-item">{personalInfo.email}</div>}
          {personalInfo.phone && <div className="luxury-contact-item">{personalInfo.phone}</div>}
          {personalInfo.location && <div className="luxury-contact-item">{personalInfo.location}</div>}
          {personalInfo.linkedin && <div className="luxury-contact-item">{personalInfo.linkedin}</div>}
        </div>

        {skills.length > 0 && (
          <div className="luxury-skills-section">
            <h3>Habilidades</h3>
            <div className="luxury-skills-grid">
              {skills.map((skill, i) => <span key={i}>{skill}</span>)}
            </div>
          </div>
        )}

        {languages.length > 0 && (
          <div className="luxury-lang-section">
            <h3>Idiomas</h3>
            {languages.map((lang, i) => (
              <div key={i} className="luxury-lang">
                <span>{lang.language}</span>
                <span className="luxury-lang-level">{lang.level}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="luxury-main">
        {personalInfo.summary && (
          <section className="luxury-about">
            <h2>Sobre</h2>
            <p>{personalInfo.summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <h2>Experiência</h2>
            {experience.map((exp, i) => (
              <div key={i} className="luxury-exp">
                <div className="luxury-exp-top">
                  <h3>{exp.position}</h3>
                  <span>{exp.startDate} — {exp.current ? 'Atual' : exp.endDate}</span>
                </div>
                <p className="luxury-exp-company">{exp.company}</p>
                {exp.description && <p className="luxury-exp-desc">{exp.description}</p>}
              </div>
            ))}
          </section>
        )}

        {education.length > 0 && (
          <section>
            <h2>Formação</h2>
            {education.map((edu, i) => (
              <div key={i} className="luxury-exp">
                <div className="luxury-exp-top">
                  <h3>{edu.degree} {edu.field && `em ${edu.field}`}</h3>
                  <span>{edu.endDate}</span>
                </div>
                <p className="luxury-exp-company">{edu.institution}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

function PremiumExecutiveDesign({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills, languages } = data;
  return (
    <div className="resume design-premium-executive">
      <div className="exec-top">
        <div className="exec-name">
          <h1>{personalInfo.name || 'Seu Nome'}</h1>
          <p>{personalInfo.title || 'Seu Cargo'}</p>
        </div>
        <div className="exec-info-grid">
          {personalInfo.email && <div className="exec-info-item"><strong>E:</strong> {personalInfo.email}</div>}
          {personalInfo.phone && <div className="exec-info-item"><strong>T:</strong> {personalInfo.phone}</div>}
          {personalInfo.location && <div className="exec-info-item"><strong>L:</strong> {personalInfo.location}</div>}
          {personalInfo.linkedin && <div className="exec-info-item"><strong>in:</strong> {personalInfo.linkedin}</div>}
        </div>
      </div>

      {personalInfo.summary && (
        <div className="exec-section">
          <h2>Resumo Executivo</h2>
          <p>{personalInfo.summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div className="exec-section">
          <h2>Trajetória Profissional</h2>
          {experience.map((exp, i) => (
            <div key={i} className="exec-exp">
              <div className="exec-exp-header">
                <div>
                  <h3>{exp.position}</h3>
                  <p className="exec-company">{exp.company}</p>
                </div>
                <span className="exec-period">{exp.startDate} — {exp.current ? 'Atual' : exp.endDate}</span>
              </div>
              {exp.description && <p className="exec-desc">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="exec-section">
          <h2>Formação</h2>
          {education.map((edu, i) => (
            <div key={i} className="exec-exp">
              <div className="exec-exp-header">
                <div>
                  <h3>{edu.degree} {edu.field && `em ${edu.field}`}</h3>
                  <p className="exec-company">{edu.institution}</p>
                </div>
                <span className="exec-period">{edu.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="exec-bottom">
        {skills.length > 0 && (
          <div className="exec-skills">
            <h3>Competências</h3>
            <p>{skills.join(' • ')}</p>
          </div>
        )}
        {languages.length > 0 && (
          <div className="exec-skills">
            <h3>Idiomas</h3>
            <p>{languages.map(l => `${l.language} (${l.level})`).join(' • ')}</p>
          </div>
        )}
      </div>
    </div>
  );
}