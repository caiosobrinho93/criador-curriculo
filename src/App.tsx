import { useState, useRef } from 'react';
import type { ResumeData } from './types/resume';
import { defaultResumeData } from './types/resume';
import { ResumeForm } from './components/ResumeForm';
import { ResumePreview, type DesignId } from './components/DesignTemplates';
import { useReactToPrint } from 'react-to-print';
import { 
  Download, Eye, Edit3, Sparkles, Menu, X, 
  User, Briefcase, GraduationCap, Languages, 
  Palette, CheckCircle, Maximize2, Minimize2
} from 'lucide-react';
import './App.css';

const sampleData: ResumeData = {
  personalInfo: {
    name: 'João Silva',
    title: 'Desenvolvedor Full Stack',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    location: 'São Paulo, SP',
    linkedin: 'linkedin.com/in/joaosilva',
    summary: 'Desenvolvedor com 5 anos de experiência em aplicações web e mobile.',
  },
  experience: [
    {
      company: 'Tech Brasil',
      position: 'Desenvolvedor Full Stack',
      startDate: '2021',
      endDate: '',
      current: true,
      description: 'Desenvolvimento de APIs RESTful com Node.js.',
    },
  ],
  education: [
    {
      institution: 'USP',
      degree: 'Bacharel',
      field: 'Ciência da Computação',
      startDate: '2015',
      endDate: '2019',
      description: '',
    },
  ],
  skills: ['React', 'TypeScript', 'Node.js', 'Python'],
  languages: [
    { language: 'Português', level: 'Nativo' },
    { language: 'Inglês', level: 'Avançado' },
  ],
};

const steps = [
  { id: 'personal', title: 'Pessoal', icon: User },
  { id: 'experience', title: 'Experiência', icon: Briefcase },
  { id: 'education', title: 'Formação', icon: GraduationCap },
  { id: 'skills', title: 'Habilidades', icon: CheckCircle },
  { id: 'languages', title: 'Idiomas', icon: Languages },
  { id: 'design', title: 'Design', icon: Palette },
];

function App() {
  const [data, setData] = useState<ResumeData>(defaultResumeData);
  const [design, setDesign] = useState<DesignId>('modern');
  const [currentStep, setCurrentStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState<'mini' | 'fullscreen'>('fullscreen');
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${data.personalInfo.name || 'curriculo'}-resume`,
  });

  const fillSampleData = () => {
    setData(sampleData);
    setMenuOpen(false);
  };

  const resetData = () => {
    setData(defaultResumeData);
    setDesign('modern');
    setCurrentStep(0);
    setShowPreview(false);
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <button className="menu-btn" onClick={() => setMenuOpen(true)}>
          <Menu size={24} />
        </button>
        <div className="logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">Currículo</span>
        </div>
        <button className="icon-btn" onClick={() => setShowPreview(!showPreview)}>
          <Eye size={20} />
        </button>
      </header>

      {/* Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="logo-text">Menu</span>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className="sidebar-content">
          <button className="menu-item" onClick={fillSampleData}>
            <Sparkles size={20} />
            <span>Preencher Exemplo</span>
          </button>
          
          <button className="menu-item danger" onClick={resetData}>
            <X size={20} />
            <span>Novo Currículo</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* Main Content */}
      <main className={`app-main ${showPreview ? 'preview-active' : ''}`}>
        {!showPreview ? (
          <div className="form-container">
            {/* Progress Steps */}
            <div className="progress-steps">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;
                
                return (
                  <button
                    key={step.id}
                    className={`step-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                    onClick={() => setCurrentStep(index)}
                  >
                    <div className="step-icon">
                      {isCompleted ? <CheckCircle size={16} /> : <Icon size={16} />}
                    </div>
                    <span>{step.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <div className="form-content">
              <ResumeForm 
                data={data} 
                onChange={setData} 
                currentStep={currentStep}
                design={design}
                onDesignChange={setDesign}
              />
            </div>

            {/* Navigation */}
            <div className="nav-buttons">
              <button 
                className="nav-btn prev" 
                onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
                disabled={currentStep === 0}
              >
                Anterior
              </button>
              
              {currentStep === steps.length - 1 ? (
                <button className="nav-btn next primary" onClick={() => setShowPreview(true)}>
                  Ver Resultado
                </button>
              ) : (
                <button className="nav-btn next" onClick={() => setCurrentStep(currentStep + 1)}>
                  Próximo
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Preview Mode */
          <div className="preview-container">
            {/* Design Selector in Preview */}
            <div className="preview-design-selector">
              <label>Design:</label>
              <div className="design-options">
                {[
                  'modern', 'classic', 'creative', 'minimalist', 'cyber', 'glass',
                  'gradient', 'tech', 'developer', 'startup', 'executive', 'elegant'
                ].map((id) => (
                  <button
                    key={id}
                    className={`design-option ${design === id ? 'active' : ''}`}
                    onClick={() => setDesign(id as DesignId)}
                    style={{ 
                      background: id === 'modern' ? '#2563eb' : 
                                 id === 'classic' ? '#1e293b' : 
                                 id === 'creative' ? '#667eea' :
                                 id === 'minimalist' ? '#64748b' :
                                 id === 'cyber' ? '#0891b2' :
                                 id === 'glass' ? '#7c3aed' :
                                 id === 'gradient' ? '#ec4899' :
                                 id === 'tech' ? '#3b82f6' :
                                 id === 'developer' ? '#0ea5e9' :
                                 id === 'startup' ? '#8b5cf6' :
                                 id === 'executive' ? '#d97706' : '#ea580c'
                    }}
                    title={id}
                  />
                ))}
              </div>
              <button 
                className="see-more"
                onClick={() => setShowPreview(false)}
              >
                + Editar
              </button>
            </div>
            
            <div className="preview-toolbar">
              <button className="toolbar-btn" onClick={() => setShowPreview(false)}>
                <Edit3 size={18} />
                Editar
              </button>
              <button className="toolbar-btn" onClick={() => setPreviewMode(previewMode === 'fullscreen' ? 'mini' : 'fullscreen')}>
                {previewMode === 'fullscreen' ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                {previewMode === 'fullscreen' ? 'Mini' : 'Tela Cheia'}
              </button>
              <button className="toolbar-btn primary" onClick={handlePrint}>
                <Download size={18} />
                PDF
              </button>
            </div>
            
            <div className={`preview-scroll ${previewMode}`}>
              <div className="preview-frame">
                <div className="preview-scaled" ref={resumeRef}>
                  <ResumePreview data={data} design={design} />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;