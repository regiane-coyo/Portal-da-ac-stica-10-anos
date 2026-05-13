/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Mic, 
  Target, 
  Handshake, 
  Presentation, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ChevronDown,
  Award,
  Wallet,
  Camera,
  Share2
} from 'lucide-react';

// --- Components ---

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-brand-primary font-black text-xs tracking-[0.3em] uppercase">{subtitle || 'Seção'}</span>
    </div>
    <h2 className="text-4xl md:text-6xl font-serif italic text-brand-dark leading-tight">{title}</h2>
    <div className="h-1 w-24 bg-brand-dark mt-4" />
  </div>
);

const ObjectiveCard = ({ title, items }: { title: string, items: string[] }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="bg-white border-2 border-brand-dark p-8 rounded-none shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]"
  >
    <h3 className="text-2xl font-serif italic text-brand-dark mb-6 border-b-2 border-brand-primary inline-block">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="text-brand-dark font-medium text-sm flex gap-3 items-start">
          <div className="w-2 h-2 bg-brand-primary mt-1.5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const TimelineItem = ({ time, activity, index, highlight, b }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
    className="flex gap-6 py-4 border-b border-brand-dark/10 last:border-0 group cursor-default"
  >
    <div className="w-16 shrink-0 text-brand-dark/40 font-mono text-xs pt-1 font-bold">{time}</div>
    <div className={`text-sm md:text-base tracking-tight font-black uppercase transition-all group-hover:translate-x-2 ${highlight ? 'text-brand-primary' : 'text-brand-dark'} ${b ? 'bg-brand-dark text-brand-bg px-2' : ''}`}>
      {activity}
    </div>
  </motion.div>
);

const InvestmentTable = ({ title, items }: { title: string, items: { name: string, qty: string | number, unit: string, total: string }[] }) => (
  <div className="mb-12 border-2 border-brand-dark bg-white overflow-hidden">
    <div className="bg-brand-dark p-4 border-b-2 border-brand-dark">
      <h3 className="text-xl font-serif italic text-brand-bg uppercase tracking-widest">{title}</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm border-collapse">
        <thead className="bg-brand-primary/10 text-brand-dark font-black text-[10px] uppercase tracking-[0.2em] border-b-2 border-brand-dark">
          <tr>
            <th className="px-6 py-4 border-r-2 border-brand-dark">Item / Descrição</th>
            <th className="px-6 py-4 border-r-2 border-brand-dark">Qtd.</th>
            <th className="px-6 py-4 border-r-2 border-brand-dark">Unit.</th>
            <th className="px-6 py-4 text-right">Total Est.</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-brand-dark">
          {items.map((item, i) => (
            <tr key={i} className="hover:bg-brand-bg transition-colors">
              <td className="px-6 py-4 text-brand-dark font-black uppercase tracking-tighter border-r-2 border-brand-dark">{item.name}</td>
              <td className="px-6 py-4 text-brand-dark/60 font-mono border-r-2 border-brand-dark">{item.qty}</td>
              <td className="px-6 py-4 text-brand-dark/60 font-mono border-r-2 border-brand-dark">{item.unit}</td>
              <td className="px-6 py-4 text-right text-brand-dark font-black font-mono">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function App() {
  const [activeScenario, setActiveScenario] = React.useState<'sjc' | 'sp'>('sjc');

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans text-brand-dark selection:bg-brand-primary/30 border-[12px] md:border-[20px] border-brand-dark">
      {/* Header Navigation */}
      <header className="flex justify-between items-center px-6 md:px-10 py-8 border-b border-brand-dark">
        <div className="flex flex-col">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">Portal da Acústica</span>
          <span className="text-2xl md:text-3xl font-serif italic">10 Anos de Excelência</span>
        </div>
        <div className="flex items-center space-x-4 md:space-x-8">
          <span className="hidden sm:block text-[10px] font-black uppercase tracking-tighter border-2 border-brand-dark px-2 py-1">B2B Exclusive</span>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest font-black">SJC • São Paulo</p>
            <p className="text-[10px] opacity-50 font-serif italic">Lançamento de Parcerias 2024</p>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="flex-grow flex flex-col md:grid md:grid-cols-12">
        
        {/* Hero Left Column */}
        <div className="md:col-span-7 p-6 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-brand-dark backdrop-blur-sm">
          <div className="relative mb-16">
            <span className="absolute -left-6 -top-4 text-[120px] md:text-[160px] font-serif italic opacity-5 leading-none select-none pointer-events-none">10</span>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-serif italic leading-[0.85] mb-8 relative z-10"
            >
              Acústica para <br/>
              <span className="not-italic font-sans font-black text-5xl md:text-7xl tracking-tighter block mt-2">ARQUITETOS</span>
            </motion.h1>
            <p className="max-w-md text-sm md:text-base leading-relaxed opacity-80 border-l-4 border-brand-primary pl-6 font-medium">
              Celebrando uma década de autoridade técnica. Uma noite dedicada à formalização de parcerias estratégicas entre os principais nomes da arquitetura nacional.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-brand-dark pt-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-4">Ponto Crucial</h3>
              <p className="text-base md:text-xl font-serif italic leading-snug">
                Apresentação da nova Política de Comissionamento e Benefícios Digitais.
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-4">Palestrante</h3>
              <div className="flex flex-col">
                <span className="font-black text-lg uppercase tracking-tight">Lucas Falcão</span>
                <span className="text-[10px] opacity-60 italic underline decoration-brand-primary font-serif">Especialista em Projetos Acústicos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Sidebar */}
        <div className="md:col-span-5 flex flex-col">
          {/* Timeline */}
          <div className="p-8 md:p-10 border-b border-brand-dark bg-brand-dark text-brand-bg">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-brand-primary">Cronograma Sugerido</h2>
            <div className="space-y-1">
              {[
                { time: "19:00", activity: "Receção & Welcome Cocktail" },
                { time: "19h30", activity: "Abertura Institucional - 10 Anos Portal" },
                { time: "19h50", activity: "Palestra Técnica: Acústica p/ Arquitetos", b: true },
                { time: "20h20", activity: "Apresentação da Política de Parcerias" },
                { time: "20h40", activity: "Lançamento Digital do Guia de Acústica", highlight: true },
                { time: "22h00", activity: "Encerramento" }
              ].map((item, i) => (
                <TimelineItem key={i} index={i} {...item} />
              ))}
            </div>
          </div>

          {/* Logistics Grid */}
          <div className="flex-grow flex flex-col bg-white/50">
            <div className="grid grid-cols-2 border-b border-brand-dark">
              <button 
                onClick={() => setActiveScenario('sjc')}
                className={`p-6 border-r border-brand-dark transition-all ${activeScenario === 'sjc' ? 'bg-brand-primary/10' : 'hover:bg-brand-bg'}`}
              >
                <span className="text-[9px] uppercase font-black opacity-40 mb-1 block">Cenário A</span>
                <p className="text-xs font-black uppercase tracking-tighter">Local Premium SJC</p>
                <p className="text-[10px] opacity-70 font-serif italic">30-60 convidados</p>
              </button>
              <button 
                onClick={() => setActiveScenario('sp')}
                className={`p-6 transition-all ${activeScenario === 'sp' ? 'bg-brand-primary/10' : 'hover:bg-brand-bg'}`}
              >
                <span className="text-[9px] uppercase font-black opacity-40 mb-1 block">Cenário B</span>
                <p className="text-xs font-black uppercase tracking-tighter">São Paulo (TS Home)</p>
                <p className="text-[10px] opacity-70 font-serif italic">60-100 convidados</p>
              </button>
            </div>
            
            <div className="p-8 md:p-10 flex-grow flex flex-col justify-center items-center text-center">
               <div className="w-16 h-16 border-2 border-dashed border-brand-dark rounded-full flex items-center justify-center mb-6 animate-[spin_6s_linear_infinite]">
                  <div className="w-4 h-4 bg-brand-primary rounded-full"></div>
               </div>
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-2">Investimento Est.</h3>
               <p className="text-5xl font-serif italic">
                {activeScenario === 'sjc' ? 'R$ 13.4k' : 'R$ 20.9k'}
               </p>
               <span className="text-[8px] uppercase mt-4 tracking-widest font-black opacity-40">Status: Aprovação Pendente</span>
            </div>
          </div>
        </div>
      </main>

      {/* Expanded Sections */}
      <div className="p-6 md:p-12 space-y-32 bg-brand-bg border-t border-brand-dark">
        {/* Objetivos Section */}
        <section>
          <SectionHeader title="Objetivos Estratégicos" subtitle="Foco & Resultados" />
          <div className="grid md:grid-cols-3 gap-8">
            <ObjectiveCard 
              title="Crescimento"
              items={[
                "Apresentar política de comissão",
                "Captar novos arquitetos parceiros",
                "Formalizar parcerias fornecedores",
                "Posicionamento Premium 2024"
              ]}
            />
            <ObjectiveCard 
              title="Conexão"
              items={[
                "Celebrar os 10 anos de marca",
                "Networking qualificado e restrito",
                "Aproximação com time comercial",
                "Fidelização de stakeholders"
              ]}
            />
            <ObjectiveCard 
              title="Autoridade"
              items={[
                "Reforço de expertise em acústica",
                "Geração de material técnico digital",
                "Impacto em redes sociais premium",
                "Posicionamento de mercado elite"
              ]}
            />
          </div>
        </section>

        {/* Investimento Detalhado */}
        <section>
          <SectionHeader title="Custos Operacionais" subtitle="Planejamento Financeiro" />
          <div className="space-y-12">
            <InvestmentTable 
              title="Estrutura & Gastronomia"
              items={[
                { name: "Coronel (Buffet Premium)", qty: 50, unit: "R$ 345,00", total: "R$ 17.250,00" },
                { name: "Armazém (Buffet Executivo)", qty: 50, unit: "R$ 195,00", total: "R$ 9.750,00" },
                { name: "Dom da Carne (Consumo)", qty: 50, unit: "R$ 177,00", total: "R$ 8.850,00" },
                { name: "Adicional Espaço Exclusivo", qty: 1, unit: "R$ 3.000", total: "R$ 3.000,00" }
              ]}
            />
            <InvestmentTable 
              title="Comunicação & Registro"
              items={[
                { name: "Convite Impresso Letterpress", qty: 50, unit: "R$ 3,00", total: "R$ 150,00" },
                { name: "Backdrop Fotográfico (3x2m)", qty: 1, unit: "R$ 580,00", total: "R$ 580,00" },
                { name: "Fotografia & Vídeo Aftermovie", qty: 1, unit: "R$ 3.000,00", total: "R$ 3.000,00" }
              ]}
            />
          </div>
        </section>

        {/* Status Tracker */}
        <section className="pb-16 border-t-2 border-brand-dark pt-16">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-4xl font-serif italic mb-4">Próximos Passos</h3>
              <p className="text-sm opacity-60">Ações imediatas para colocar o evento no calendário oficial de 2024.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {["Definir Cenário", "Confirmar Palestrante", "Data Oficial", "Lista de Convidados"].map((step, i) => (
                <div key={i} className="px-4 py-2 border border-brand-dark/20 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" /> {step}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Branding */}
      <footer className="grid grid-cols-2 md:grid-cols-4 border-t border-brand-dark text-[10px] font-black uppercase tracking-widest bg-brand-bg">
        <div className="p-6 border-r border-b md:border-b-0 border-brand-dark flex items-center justify-center text-center">
          Captação de Novos Parceiros
        </div>
        <div className="p-6 border-r border-b md:border-b-0 border-brand-dark flex items-center justify-center bg-brand-primary text-white text-center">
          Autoridade Técnica
        </div>
        <div className="p-6 border-r border-brand-dark flex items-center justify-center text-center">
          Expansão de Negócios
        </div>
        <div className="p-6 flex items-center justify-center text-center">
          Material Técnico de Valor
        </div>
      </footer>
    </div>
  );
}
