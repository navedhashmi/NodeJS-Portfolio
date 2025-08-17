import * as React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from "@/app/components/theme-toggle";

const LeftColumn = React.memo(() => {
  return (
    <div className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-scroll no-scrollbar">
      <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
        <div className="flex justify-between items-center mt-6">
          <h1 className="text-4xl font-bold">NAVED HASHMI</h1>
          <ThemeToggle />
        </div>
        <h3 className="mt-2 text-md">Microsoft and Databricks Certified Data Engineer</h3>
        <p className="my-6 max-w-2xl text-foreground/80">
          Adept at addressing complex data challenges to facilitate informed decision-making and improve organizational efficiency.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a href="https://calendly.com/your-username" target="_blank" rel="noopener noreferrer">
            <Button>Schedule Call</Button>
          </a>
          <a href="/assets/Naved_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Resume</Button>
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <a href="mailto:navedhashmi33@gmail.com" className="social-link"><Mail size={16} /></a>
          <a href="https://www.linkedin.com/in/naved-hashmi-a4b81b13a/" target="_blank" className="social-link"><Linkedin size={15} /></a>
          <a href="https://github.com/navedhashmi33" target="_blank" className="social-link"><Github size={15} /></a>
        </div>
        <div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
          <p><span className="font-semibold text-primary/90">Programming Languages:</span> Python, SQL</p>
          <p><span className="font-semibold text-primary/90">Data Governance:</span> Databricks Unity Catalog, Azure Purview</p>
          <p><span className="font-semibold text-primary/90">Database Management:</span> Azure SQL Database, SQL Server, MySQL, Databricks Delta Lake, S3, ADLS, Oracle</p>
          <p><span className="font-semibold text-primary/90">Version Control:</span> Azure Devops, Github</p>
          <p><span className="font-semibold text-primary/90">Cloud Platforms:</span> Microsoft Azure, AWS</p>
          
          <p><span className="font-semibold text-primary/90">Data Warehousing Tools:</span> Azure Synapse, Databricks, Azure Data Factory</p>
          <p><span className="font-semibold text-primary/90">Streaming:</span> Spark Structured Streaming, Kafka, DLT, Event Hub</p>
          <p><span className="font-semibold text-primary/90">Other Tools:</span> Azure Logic Apps, Azure Functions, Docker, Web Socket, API Integration</p>
        </div>
      </section>
    </div>
  );
});

LeftColumn.displayName = 'LeftColumn';

export default LeftColumn;