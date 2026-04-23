import { useState } from 'react';
import type { ResumeData } from '../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
  currentStep: number;
}

export function ResumeForm({ data, onChange, currentStep }: Props) {
  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value },
    });
  };

  const addExperience = () => {
    onChange({
      ...data,
      experience: [
        ...data.experience,
        { company: '', position: '', startDate: '', endDate: '', current: false, description: '' },
      ],
    });
  };

  const updateExperience = (index: number, field: string, value: string | boolean) => {
    const updated = [...data.experience];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, experience: updated });
  };

  const removeExperience = (index: number) => {
    onChange({ ...data, experience: data.experience.filter((_, i) => i !== index) });
  };

  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        { institution: '', degree: '', field: '', startDate: '', endDate: '', description: '' },
      ],
    });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const updated = [...data.education];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, education: updated });
  };

  const removeEducation = (index: number) => {
    onChange({ ...data, education: data.education.filter((_, i) => i !== index) });
  };

  const updateSkills = (value: string) => {
    const skills = value.split(',').map((s) => s.trim()).filter(Boolean);
    onChange({ ...data, skills });
  };

  const addLanguage = () => {
    onChange({
      ...data,
      languages: [...data.languages, { language: '', level: '' }],
    });
  };

  const updateLanguage = (index: number, field: string, value: string) => {
    const updated = [...data.languages];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, languages: updated });
  };

  const removeLanguage = (index: number) => {
    onChange({ ...data, languages: data.languages.filter((_, i) => i !== index) });
  };

  if (currentStep === 0) {
    return (
      <div className="form-step">
        <h2>Informações Pessoais</h2>
        <div className="form-grid">
          <div className="input-group">
            <label>Nome Completo</label>
            <input type="text" value={data.personalInfo.name} onChange={(e) => updatePersonalInfo('name', e.target.value)} placeholder="Seu nome" />
          </div>
          <div className="input-group">
            <label>Cargo</label>
            <input type="text" value={data.personalInfo.title} onChange={(e) => updatePersonalInfo('title', e.target.value)} placeholder="Seu cargo" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={data.personalInfo.email} onChange={(e) => updatePersonalInfo('email', e.target.value)} placeholder="email@email.com" />
          </div>
          <div className="input-group">
            <label>Telefone</label>
            <input type="tel" value={data.personalInfo.phone} onChange={(e) => updatePersonalInfo('phone', e.target.value)} placeholder="(00) 00000-0000" />
          </div>
          <div className="input-group">
            <label>Localização</label>
            <input type="text" value={data.personalInfo.location} onChange={(e) => updatePersonalInfo('location', e.target.value)} placeholder="Cidade, UF" />
          </div>
          <div className="input-group">
            <label>LinkedIn</label>
            <input type="text" value={data.personalInfo.linkedin} onChange={(e) => updatePersonalInfo('linkedin', e.target.value)} placeholder="linkedin.com/in/..." />
          </div>
        </div>
        <div className="input-group full-width">
          <label>Resumo Profissional</label>
          <textarea value={data.personalInfo.summary} onChange={(e) => updatePersonalInfo('summary', e.target.value)} placeholder="Fale sobre você..." rows={4} />
        </div>
      </div>
    );
  }

  if (currentStep === 1) {
    return (
      <div className="form-step">
        <h2>Experiência Profissional</h2>
        {data.experience.map((exp, i) => (
          <div key={i} className="item-card">
            <button className="remove-btn" onClick={() => removeExperience(i)}><Trash2 size={16} /></button>
            <div className="form-grid">
              <div className="input-group">
                <label>Empresa</label>
                <input type="text" value={exp.company} onChange={(e) => updateExperience(i, 'company', e.target.value)} placeholder="Empresa" />
              </div>
              <div className="input-group">
                <label>Cargo</label>
                <input type="text" value={exp.position} onChange={(e) => updateExperience(i, 'position', e.target.value)} placeholder="Cargo" />
              </div>
              <div className="input-group">
                <label>Início</label>
                <input type="text" value={exp.startDate} onChange={(e) => updateExperience(i, 'startDate', e.target.value)} placeholder="01/2020" />
              </div>
              <div className="input-group">
                <label>Fim</label>
                <input type="text" value={exp.endDate} onChange={(e) => updateExperience(i, 'endDate', e.target.value)} placeholder="Atual" disabled={exp.current} />
              </div>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" checked={exp.current} onChange={(e) => updateExperience(i, 'current', e.target.checked)} />
              <label>Trabalho atual</label>
            </div>
            <div className="input-group">
              <label>Descrição</label>
              <textarea value={exp.description} onChange={(e) => updateExperience(i, 'description', e.target.value)} placeholder="Suas atividades..." rows={3} />
            </div>
          </div>
        ))}
        <button className="add-btn" onClick={addExperience}><Plus size={18} />Adicionar Experiência</button>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="form-step">
        <h2>Formação Acadêmica</h2>
        {data.education.map((edu, i) => (
          <div key={i} className="item-card">
            <button className="remove-btn" onClick={() => removeEducation(i)}><Trash2 size={16} /></button>
            <div className="form-grid">
              <div className="input-group">
                <label>Instituição</label>
                <input type="text" value={edu.institution} onChange={(e) => updateEducation(i, 'institution', e.target.value)} placeholder="Universidade" />
              </div>
              <div className="input-group">
                <label>Grau</label>
                <input type="text" value={edu.degree} onChange={(e) => updateEducation(i, 'degree', e.target.value)} placeholder="Bacharel, Mestrado..." />
              </div>
              <div className="input-group full-width">
                <label>Curso</label>
                <input type="text" value={edu.field} onChange={(e) => updateEducation(i, 'field', e.target.value)} placeholder="Curso" />
              </div>
              <div className="input-group">
                <label>Período</label>
                <input type="text" value={edu.endDate} onChange={(e) => updateEducation(i, 'endDate', e.target.value)} placeholder="2020 - 2024" />
              </div>
            </div>
          </div>
        ))}
        <button className="add-btn" onClick={addEducation}><Plus size={18} />Adicionar Formação</button>
      </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div className="form-step">
        <h2>Habilidades</h2>
        <div className="input-group">
          <label>Habilidades (separadas por vírgula)</label>
          <textarea value={data.skills.join(', ')} onChange={(e) => updateSkills(e.target.value)} placeholder="React, Node.js, TypeScript..." rows={6} />
        </div>
      </div>
    );
  }

  if (currentStep === 4) {
    return (
      <div className="form-step">
        <h2>Idiomas</h2>
        {data.languages.map((lang, i) => (
          <div key={i} className="item-card">
            <button className="remove-btn" onClick={() => removeLanguage(i)}><Trash2 size={16} /></button>
            <div className="form-grid">
              <div className="input-group">
                <label>Idioma</label>
                <input type="text" value={lang.language} onChange={(e) => updateLanguage(i, 'language', e.target.value)} placeholder="Inglês" />
              </div>
              <div className="input-group">
                <label>Nível</label>
                <input type="text" value={lang.level} onChange={(e) => updateLanguage(i, 'level', e.target.value)} placeholder="Avançado, Fluente..." />
              </div>
            </div>
          </div>
        ))}
        <button className="add-btn" onClick={addLanguage}><Plus size={18} />Adicionar Idioma</button>
      </div>
    );
  }

  if (currentStep === 5) {
    return (
      <div className="form-step design-step">
        <h2>Escolha o Design</h2>
        <DesignSelectorMini />
      </div>
    );
  }

  return null;
}

import { designInfo, type DesignId } from './DesignTemplates';

function DesignSelectorMini() {
  const [selected, setSelected] = useState<DesignId>('modern');
  
  return (
    <div className="design-selector-mini">
      {designInfo.map((d) => (
        <div
          key={d.id}
          className={`design-option ${selected === d.id ? 'selected' : ''}`}
          onClick={() => setSelected(d.id)}
        >
          <div 
            className="design-color"
            style={{ 
              background: d.colors.length === 2 
                ? `linear-gradient(135deg, ${d.colors[0]} 0%, ${d.colors[1]} 100%)`
                : d.colors[0]
            }}
          />
          <span>{d.name}</span>
        </div>
      ))}
    </div>
  );
}