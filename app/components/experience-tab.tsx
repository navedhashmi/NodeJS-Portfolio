
import React from 'react';

const ExperienceTab = () => {
  const experiences = [
    {
      company: 'Celebal Technologies',
      title: 'Big Data Engineer',
      date: 'Apr 2024 - Present',
      details: [
        'No specific details provided for this role in the resume, but the LinkedIn profile indicates this is the current position.',
      ],
    },
    {
      company: 'Celebal Technologies',
      title: 'Associate Data Engineer',
      date: 'Mar 2023 - Mar 2024',
      details: [
        'This role likely encompasses the "Commercial Bank Thailand" and "Major Infrastructure Company UK" projects from the resume.',
        'Migrated an environment from TeraData to Databricks and developed multiple Spark notebooks.',
        'Designed and created Bronze, Silver, and Gold data layers by converting TeraData SQL Scripts to ANSI SQL.',
        'Set up ADF Pipelines and Notebooks for Data Validation and Reconciliation.',
        'Implemented Spark Optimization techniques like changing join structures and cluster resizing to meet SLAs.',
        'Designed and developed retail and Salesforce Ingestion ETL Processes using ADF, SQL Server, and Databricks.',
        'Implemented Slowly Changing Dimension (SCD) Type 2 for master data management.',
        'Enhanced data quality by enriching assets with metadata and automatically ingesting column descriptions.',
        'Managed and maintained retail data assets, and optimized old processes.',
      ],
    },
    {
      company: 'Celebal Technologies',
      title: 'Junior Associate - Data Engineering(App Development)',
      date: 'Sep 2022 - Mar 2023',
      details: [
        'This role likely aligns with the "Data Governance & Migration Project: Unity Catalog" from the resume.',
        'Designed and developed a Unity Catalog Migration Framework to automate the migration of Hive Metastore data to Unity Catalog.',
        'Worked with other vendors and teams to deliver over 1500 workspaces migrated to Unity Catalog.',
        'Managed and delivered 5 projects as a Tech Lead in various domains.',
        'Set up Azure Purview (Organization Wide) and Unity Catalog integration.',
        'Made Py-Spark code compatible with Unity Catalog for re-deployment on Databricks.',
      ],
    },
    {
      company: 'Celebal Technologies',
      title: 'Celebal Summer Intern',
      date: 'Jun 2022 - Jul 2022',
      details: [
        'RESTful API Development with FastAPI.',
        'SQL Database Integration.',
        'Django, Back-End Web Development.',
      ],
    },
    {
      company: 'Freelance',
      title: 'Business Development Consultant',
      date: 'Apr 2017 - May 2021',
      details: [
        'Developed and executed strategies for online brand identity creation.',
        'Conducted cost and manpower assessments to facilitate business setup on various online marketplaces.',
        'Focused on business-to-business (B2B) relationships and process improvement.',
      ],
    },
    {
      company: 'Lionbridge',
      title: 'Internet Advertisement Assessor',
      date: 'Oct 2019 - Mar 2020',
      details: [
        'Managed key accounts and assessed advertisements.',
        'Utilized skills in social media advertising and trend analysis.',
      ],
    },
    {
      company: 'Stellar Information Technology Pvt. Ltd.',
      title: 'Management Trainee',
      date: 'May 2016 - Jul 2016',
      details: [
        'Conducted research and analysis of company products and online marketing strategies.',
        'Gained hands-on experience in data mining and marketing.',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
        {experiences.map((exp, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">{experiences.length - index}</h1>
            </div>
            <div className={`order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105"`}>
              <p className="mb-3 text-base text-gray-400">{exp.date}</p>
              <h4 className="mb-3 font-bold text-lg md:text-2xl text-white">{exp.title}</h4>
              <h5 className="mb-3 font-bold text-md md:text-xl text-white">{exp.company}</h5>
              <ul className="list-disc pl-5 text-sm text-gray-300">
                {exp.details.map((detail, i) => (
                  <li key={i} className="mb-2">{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTab;
