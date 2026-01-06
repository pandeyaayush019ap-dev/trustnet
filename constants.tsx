
import React from 'react';
import { Shield, BrainCircuit, Network, SearchCode, AlertTriangle, FileCheck, Layers, Eye, Settings, Terminal } from 'lucide-react';
import { Step, ModelDetail, Section } from './types';

export const SECTIONS: Section[] = [
  { id: 'intro', label: 'Introduction' },
  { id: 'concept', label: 'Core Concept' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'implementation', label: '9-Step Plan' },
  { id: 'models', label: 'AI Model Layer' },
  { id: 'ethics', label: 'Ethics & Risks' },
  { id: 'assistant', label: 'Strategy Assistant' },
];

export const IMPLEMENTATION_STEPS: Step[] = [
  {
    id: 1,
    title: "Define Scope & Objectives",
    description: "Establishing the baseline for what constitutes corruption or bias.",
    details: [
      "Categorize specific behaviors: financial wrongdoing, discriminatory practices, manipulation",
      "Align with legal frameworks",
      "Build governance principles prior to engineering"
    ],
    icon: "Target"
  },
  {
    id: 2,
    title: "Gather Relevant Data",
    description: "Aggregating structured and unstructured signals.",
    details: [
      "Structured: Financial transactions, procurement records, voting data",
      "Unstructured: Emails, public statements, social media, meeting records",
      "Contextual: Watchdog indices, regulatory disclosures"
    ],
    icon: "Database"
  },
  {
    id: 3,
    title: "Preprocess & Normalize",
    description: "Transforming raw world data into machine-readable intelligence.",
    details: [
      "Tokenize and clean text records",
      "Normalize transaction formats and date systems",
      "Tag metadata for graph analysis (Roles, Organization Units)"
    ],
    icon: "RefreshCw"
  },
  {
    id: 4,
    title: "Build Core AI Models",
    description: "Implementing specialized detection engines.",
    details: [
      "Unsupervised anomaly detection",
      "Relationship graph mapping",
      "Transformer-based NLP sentiment analysis"
    ],
    icon: "Cpu"
  },
  {
    id: 5,
    title: "Bias & Fairness Check",
    description: "Ensuring the detector doesn't become the problem.",
    details: [
      "Audit datasets for historical bias",
      "Implement explainable AI tools (SHAP/LIME)",
      "Adjust training based on fairness criteria"
    ],
    icon: "Scale"
  },
  {
    id: 6,
    title: "Invisible Signal Detection",
    description: "Surfacing patterns human oversight might miss.",
    details: [
      "Timing subtle transaction patterns",
      "Workflow behavioral anomalies",
      "Cross-dataset correlations"
    ],
    icon: "Zap"
  },
  {
    id: 7,
    title: "Monitoring & Alerts",
    description: "Triage systems for risk management.",
    details: [
      "Low Risk: Anomalies needing automated review",
      "Medium Risk: Expert assessment flagging",
      "High Risk: Compliance escalation"
    ],
    icon: "Bell"
  },
  {
    id: 8,
    title: "Human Governance",
    description: "The essential validation layer.",
    details: [
      "Trained professionals review every alert",
      "Contextualizing machine outputs",
      "Feedback loops to refine AI models"
    ],
    icon: "UserCheck"
  },
  {
    id: 9,
    title: "Reporting & Action",
    description: "Translating signals into institutional responses.",
    details: [
      "Scorecards for corruption risk",
      "Audit trails and evidence logs",
      "Interactive dashboards for leadership"
    ],
    icon: "FileBarChart"
  }
];

export const CORE_MODELS: ModelDetail[] = [
  {
    title: "Anomaly Detection",
    subtitle: "Outlier Identification",
    points: [
      "Unusual contract award patterns",
      "Irregular transaction flows",
      "Network anomalies in organizational behavior",
      "Using Isolation Forests & Autoencoders"
    ],
    icon: "AlertTriangle"
  },
  {
    title: "Graph & Network Analysis",
    subtitle: "Hidden Connection Mapping",
    points: [
      "Person ↔ Company ↔ Contract mapping",
      "Revealing 'invisible' corporate connections",
      "Spotting shell company networks",
      "Centrality and community detection"
    ],
    icon: "Network"
  },
  {
    title: "NLP Pattern Detection",
    subtitle: "Linguistic Forensic",
    points: [
      "Identifying euphemistic or coded terminology",
      "Detecting coordination in manipulation patterns",
      "Sentiment and tone extraction from comms",
      "Fine-tuned transformer architectures"
    ],
    icon: "BrainCircuit"
  }
];

export const CONTEXT_PROMPT = `
You are the TrustNet Strategy Assistant. You are an expert on Responsible AI and institutional corruption detection.
The user is viewing a presentation based on the following document:

--- 1. What TrustNet.AI Actually Is ---
It is an advisory platform for responsible and trustworthy AI strategies.
Focus: Enterprise risk, ethics, responsible deployment, training, and governance frameworks.
Clarification: It helps use AI responsibly; it is not a standalone "anti-corruption machine."

--- 3. System Architecture for Detection ---
1. Data Collection
2. Preprocessing
3. AI Analytics Model Layer
4. Anomaly & Bias Detection
5. Interpretation/Explanation
6. Human Governance Loop
7. Reporting/Action

--- 4. Implementation Steps ---
(Steps 1-9 cover scope, data, normalization, core models, bias checks, invisible signal detection, monitoring, governance, and reporting)

--- 6. Key Challenges ---
Privacy, Model Bias, False Positives, Transparency, Governance.

Answer questions based on this strategy. If you don't know the answer, say you are not sure but can speculate based on Responsible AI principles.
`;
