
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Globe, Twitter, Youtube, Linkedin } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-xl border overflow-hidden">
      <div className="space-y-2 w-full tablet:w-3/5">
        <a className="space-y-2 group/link" href="#">
          <div className="inline-flex items-center gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-semibold font-heading">{project.title}</h1>
              <span className="text-xs px-2 py-1 rounded bg-secondary">{project.date}</span>
            </div>
            <span className="-translate-x-1 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-100 ease-in-out">
              {/* Arrow icon here */}
            </span>
          </div>
          <ul className="list-disc pl-5 text-sm text-secondary-foreground/80 font-light max-w-2xl">
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </a>
        <div className="flex items-center gap-2 flex-wrap">
          {project.tags.map((tag, index) => (
            <p key={index} className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs cursor-pointer">{tag}</p>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {project.links.github && <a href={project.links.github} target="_blank" className="social-link"><Github size={15} /></a>}
          {project.links.website && <a href={project.links.website} target="_blank" className="social-link"><Globe size={15} /></a>}
          {project.links.twitter && <a href={project.links.twitter} target="_blank" className="social-link"><Twitter size={15} /></a>}
          {project.links.youtube && <a href={project.links.youtube} target="_blank" className="social-link"><Youtube size={15} /></a>}
          {project.links.linkedin && <a href={project.links.linkedin} target="_blank" className="social-link"><Linkedin size={15} /></a>}
        </div>
      </div>
      <div className="w-2/5 aspect-video overflow-hidden hover:border duration-100 transition-all transform-gpu ease-in-out rounded-xl hidden tablet:block">
        <a href="#">
          <Image src={project.image} alt={project.title} width={250} height={100} className="block dark:hidden w-full h-full object-cover scale-100 hover:scale-105 transition-all transform-gpu ease-in-out" />
          <Image src={project.image} alt={project.title} width={250} height={100} className="hidden dark:block w-full h-full object-cover scale-100 hover:scale-105 transition-all transform-gpu ease-in-out" />
        </a>
      </div>
    </div>
  );
}
