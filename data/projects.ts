export const projects = [
  {
    title: "Commercial Bank Thailand",
    date: "Data Engineering Project",
    details: [
      "Migrated the environment from the TeraData to Databricks. Developed and implemented multiple spark notebooks in Databricks.",
      "Designed and created Bronze, Silver, and Gold data layers by converting TeraData SQL Scripts to ANSI SQL and segregate the layers.",
      "Setup Data Checks and Reconciliation ADF Pipelines and Notebooks for Data Validation.",
      "Implemented Spark Optimization like changing joins structure, Cluster resizing, Shuffle partitioning to meet SLAs.",
      "Create Automation Scripts and flows to achieve parallelism in Data Reconciliation and Validation.",
      "Create and Setup ADF Pipelines and workflows to replicate On Prem ETL processes."
    ],
    tags: ["TeraData", "PySpark", "Spark SQL", "Databricks", "ADF", "SQL Server"],
    links: {
      github: "#",
      website: "#",
    },
    image: "/designs/p1.png",
  },
  {
    title: "Data Governance & Migration Project: Unity Catalog",
    date: "Data Governance & Migration Project",
    details: [
      "Designed and Developed Unity Catalog Migration Framework, Which Automates the lift and shift of Hive Metastore data with table ACLs and migrate it to Unity Catalog defined structure.",
      "Managed and Delivered 5 Projects as Tech Lead in various domains ranging from Education, Automobile, SAAS, Petroleum.",
      "Working with other Vendors and teams in a collaborative way to deliver 1500+ workspaces shifted to Unity Catalog Capabilities.",
      "Setup of Azure Purview (Organization Wide) and Al capabilities and Unity Catalog integration.",
      "Make current Py-Spark code Unity catalog compatible with re-deployment of Clusters on Databricks and migration of scripts."
    ],
    tags: ["PySpark", "Spark SQL", "Databricks", "ADF", "SQL Server", "Python", "Unity Catalog", "Purview", "AWS S3", "IAM"],
    links: {
      github: "#",
      website: "#",
    },
    image: "/designs/p2.png",
  },
  {
    title: "Data Engineering Project: Major Infrastructure Company UK",
    date: "Data Engineering Project",
    details: [
      "Designed and developed retail Ingestion ETL Process using ADF, SQL Server and Databricks Jobs.",
      "Designed and created Bronze, Silver, and Gold data layers by applying business logic aligned with Key Performance Indicators (KPIs).",
      "Implemented Slowly Changing Dimension (SCD) Type 2 for master data management and applied priority logic using Databricks.",
      "Designed and Developed Salesforce Ingestion ETL Process.",
      "Enhanced data quality by enriching assets with metadata, automatically ingesting column descriptions.",
      "Managed and Maintained, Whole Retail Data assets, optimized old processes and implemented new efficient solutions."
    ],
    tags: ["PySpark", "Spark SQL", "Databricks", "ADF", "SQL Server", "API"],
    links: {
      github: "#",
      website: "#",
    },
    image: "/designs/p3.png",
  },
];