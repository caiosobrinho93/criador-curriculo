import { useState, useRef } from 'react';
import type { ResumeData } from './types/resume';
import { defaultResumeData } from './types/resume';
import { ResumeForm } from './components/ResumeForm';
import { ResumePreview, type DesignId } from './components/DesignTemplates';
import { useReactToPrint } from 'react-to-print';
import { Download, Eye, Edit3, Sparkles, ChevronLeft, ChevronRight, Check, User, Briefcase, GraduationCap, Languages, Star } from 'lucide-react';
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
  { id: 'skills', title: 'Habilidades', icon: Star },
  { id: 'languages', title: 'Idiomas', icon: Languages },
  { id: 'design', title: 'Design', icon: Check },
];

function App() {
  const [data, setData] = useState<ResumeData>(defaultResumeData);
  const [design, setDesign] = useState<DesignId>('modern');
  const [currentStep, setCurrentStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${data.personalInfo.name || 'curriculo'}-resume`,
  });

  const fillSampleData = () => {
    setData(sampleData);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowPreview(true);
    }
  };

  const prevStep = () => {
    if (showPreview) {
      setShowPreview(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    if (showPreview) {
      return (
        <div className="preview-step">
          <div className="preview-wrapper" ref={resumeRef}>
            <ResumePreview data={data} design={design} />
          </div>
          <div className="preview-actions">
            <button className="btn-primary" onClick={() => handlePrint()}>
              <Download size={20} />
              Baixar PDF
            </button>
            <button className="btn-secondary" onClick={() => setShowPreview(false)}>
              <Edit3 size={20} />
              Editar
            </button>
          </div>
        </div>
      );
    }

    return (
      <ResumeForm 
        data={data} 
        onChange={setData} 
        currentStep={currentStep}
      />
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">Currículo</span>
        </div>
        <button className="sample-btn" onClick={fillSampleData}>
          <Sparkles size={16} />
          <span className="btn-text">Demo</span>
        </button>
      </header>

      {!showPreview && (
        <div className="steps-container">
          <div className="steps">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              
              return (
                <div 
                  key={step.id}
                  className={`step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="step-icon">
                    {isCompleted ? <Check size={16} /> : <Icon size={16} />}
                  </div>
                  <span className="step-title">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <main className={`app-main ${showPreview ? 'preview-mode' : ''}`}>
        {renderStepContent()}
      </main>

      {!showPreview && (
        <footer className="app-footer">
          <button 
            className="btn-nav prev" 
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="step-indicator">
            {currentStep + 1} / {steps.length}
          </div>
          
          <button className="btn-nav next" onClick={nextStep}>
            {currentStep === steps.length - 1 ? (
              <Eye size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
        </footer>
      )}
    </div>
  );
}

export default App;