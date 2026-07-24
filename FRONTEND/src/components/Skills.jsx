import React from 'react';
import { Terminal, CheckCircle2, LayoutGrid } from 'lucide-react';
import { SiPython } from 'react-icons/si'; // Official Python Brand Logo

const skillItems = [
  { name: 'Full-Stack Development', icon: Terminal },
  { name: 'Python Development', icon: SiPython },      // Actual Python Icon
  { name: 'Test Automation', icon: CheckCircle2 },     // Semantic icon for testing/QA
  { name: 'Web Designing', icon: LayoutGrid },
];

export default function Skills() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-serif uppercase tracking-wider text-center text-[#ebdcd0]">
        Skills & Tooling
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillItems.map((skill) => {
          const Icon = skill.icon;
          return (
            <div 
              key={skill.name} // Fixed: Use unique name instead of index
              className="bg-[#16293b] border border-[#1a364a] p-5 rounded-lg text-center flex flex-col items-center gap-3 transition-colors hover:bg-[#1a364a]"
            >
              <Icon className="w-6 h-6 text-[#7c93a3]" />
              <p className="text-sm font-medium tracking-wide text-[#ebdcd0]">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}