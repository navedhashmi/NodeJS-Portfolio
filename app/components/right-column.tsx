'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProjectCard from './project-card';
import { projects } from '@/data/projects';
import ExperienceTab from './experience-tab';
import ContactForm from './contact-form';
import ExtrasTab from './extras-tab';

export default function RightColumn() {
  const [activeTab, setActiveTab] = useState('Projects');

  return (
    <div id="tab-section" className="relative w-full mt-3 max-w-4xl mx-auto lg:mt-0 lg:h-full lg:w-3/5 p-2 md:p-8 lg:overflow-y-scroll glass-scrollbar">
      <div className="sticky top-0 inline-flex items-center text-sm rounded-lg z-50 border-b border border-opacity-20">
        <div onClick={() => setActiveTab('Projects')} className={`p-2 min-w-16 lg:min-w-24 text-center cursor-pointer bg-background transition-all duration-300 ease-in-out hover:bg-secondary ${activeTab === 'Projects' ? 'current' : ''} rounded-l-lg`}>Projects</div>
        <div onClick={() => setActiveTab('Experience')} className={`p-2 min-w-16 lg:min-w-24 text-center cursor-pointer bg-background transition-all duration-300 ease-in-out hover:bg-secondary ${activeTab === 'Experience' ? 'current' : ''}`}>Experience</div>
        <div onClick={() => setActiveTab('Codebase')} className={`p-2 min-w-16 lg:min-w-24 text-center cursor-pointer bg-background transition-all duration-300 ease-in-out hover:bg-secondary ${activeTab === 'Codebase' ? 'current' : ''}`}>Codebase</div>
        <div onClick={() => setActiveTab('Extras')} className={`p-2 min-w-16 lg:min-w-24 text-center cursor-pointer bg-background transition-all duration-300 ease-in-out hover:bg-secondary ${activeTab === 'Extras' ? 'current' : ''}`}>Extras</div>
        <div onClick={() => setActiveTab('Contact')} className={`p-2 min-w-16 lg:min-w-24 text-center cursor-pointer bg-background transition-all duration-300 ease-in-out hover:bg-secondary ${activeTab === 'Contact' ? 'current' : ''} rounded-r-lg`}>Contact</div>
      </div>

      <section className="w-full space-y-6 mt-5">
        {activeTab === 'Projects' && (
          <>
            <form className="w-full flex items-center nav-container sticky top-14 z-20">
              <div className="space-y-2 w-full">
                <Input placeholder="search projects" />
              </div>
              <div className="flex items-center">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Featured" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Featured">Featured</SelectItem>
                    <SelectItem value="Github">Github</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </>
        )}
        {activeTab === 'Experience' && <ExperienceTab />}
        {activeTab === 'Codebase' && <div className="text-center"><a href="https://github.com/navedhashmi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Codebase on GitHub</a></div>}
        {activeTab === 'Extras' && <ExtrasTab />}
        {activeTab === 'Contact' && <ContactForm />}
      </section>
    </div>
  );
}