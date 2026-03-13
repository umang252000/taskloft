# 🚀 TaskLoft

<img width="1536" height="1024" alt="1" src="https://github.com/user-attachments/assets/eef8d57f-533c-45ea-bee8-b37e2c0e755f" />

## Autonomous Business Operations Agents for the Web

TaskLoft is an AI-powered platform that deploys autonomous web agents capable of executing real business workflows across live websites.

Instead of employees spending hours performing repetitive browser tasks, TaskLoft agents act as digital operations employees, navigating the web, interacting with dynamic interfaces, and completing multi-step tasks automatically.

Built using the TinyFish Web Agent API, TaskLoft demonstrates how the web can become an executable runtime for AI workers.

---

## 🌍 Why TaskLoft Exists

Modern companies spend thousands of hours on repetitive web workflows.

Examples include:

• Procurement teams sourcing suppliers  
• Sales teams collecting leads from directories  
• Operations teams monitoring competitor prices  
• HR teams posting jobs across multiple platforms  
• Logistics teams tracking shipments  

These workflows require navigating:

- dynamic web pages  
- login sessions  
- multi-step forms  
- pagination  
- popups  
- complex dashboards  

Despite advancements in AI, most tools today only:

- ❌ summarize information  
- ❌ provide chat interfaces  
- ❌ automate small tasks  

Very few systems can actually perform real work on the web.

---

## 💡 Our Vision

TaskLoft transforms the web into an operating system for AI workers.

Instead of building single-purpose automation tools, TaskLoft creates a platform where autonomous agents execute operational workflows continuously.

This allows companies to automate entire categories of digital work.

---

## Core Idea

TaskLoft introduces AI Operations Agents that execute business workflows across the internet.

Users simply define a task such as:
- Find the cheapest supplier for 100 laptop chargers and place the order.

The agent automatically:

- 1.Opens supplier marketplaces
- 2.Searches for products
- 3.Compares vendor prices
- 4.Selects best option
- 5.Fills checkout form
- 6.Completes order

This represents a shift from AI assistants → AI workers.

---

## Example Agents

### Procurement Agent

Automates supplier sourcing and ordering.

Workflow:
- Open supplier marketplace
- Search product
- Compare vendors
- Select best price
- Add to cart
- Fill order form
- Place order

---

### Competitor Monitoring Agent

Tracks competitor product pricing.

- Workflow:
- Visit competitor website
- Extract product prices
- Compare with previous data
- Generate report

---

### Job Posting Agent

Automates recruitment workflows.

Workflow:
- Open job board
- Fill job listing form
- Submit job post
- Track applicants

---

## ✨ Key Features

### Autonomous Web Agents

Agents interact with real websites using TinyFish infrastructure.

---

### AI Workflow Builder

Users describe tasks in natural language and agents execute them.

Example:

Monitor Amazon price for iPhone every day

---

### Multi-Agent System

Different agents specialize in specific operational tasks.

---

### Scheduled Automation

Agents can run automatically:

• hourly  
• daily  
• weekly  

---

### Agent Monitoring

Track execution logs and workflow activity.

---

### Automation Metrics

Dashboard displays:

• tasks automated  
• hours saved  
• cost saved  

---

## System Architecture

<img width="1536" height="1024" alt="2" src="https://github.com/user-attachments/assets/ef0fa05c-cccc-40f9-b92e-5501e145ef64" />

```
User Dashboard (Next.js + Tailwind)
          │
          ▼
Workflow Builder
          │
          ▼
Agent Orchestrator (FastAPI)
          │
          ▼
Workflow Engine
          │
          ▼
TinyFish Web Agent API
          │
          ▼
Live Websites
Supplier portals
Job boards
Competitor sites
CRM systems
```

---

## 🔬 Technical Architecture

TaskLoft uses a modular architecture designed for scalability.

### Frontend Layer

Provides a SaaS-style dashboard for workflow management.

Responsibilities:

• workflow creation  
• agent monitoring  
• automation analytics  

---

### Backend Layer

Handles agent orchestration and workflow execution.

Responsibilities:

• workflow interpretation  
• agent coordination  
• scheduling automation  

---

### Agent Infrastructure

TinyFish Web Agent API performs real browser actions.

Capabilities:

• navigate dynamic websites  
• manage sessions  
• interact with forms  
• handle multi-step workflows  

---

### Monitoring System

Tracks agent execution and reliability.

Features:

• workflow logs  
• execution history  
• automation metrics  

---

## Tech Stack

### Frontend

• Next.js  
• Tailwind CSS  

### Backend

• FastAPI (Python)  

### Agent Infrastructure

• TinyFish Web Agent API  

### Automation

• APScheduler  

### Database

• MongoDB  

### Other Tools

• Axios  
• Python Requests  
• Node.js  

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/umang252000/taskloft
```

Navigate into project:

```
cd taskloft
```

---

### Backend Setup

```
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Run server:

```
uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create:

```
backend/.env
```

Add:

```
TINYFISH_API_KEY=your_api_key
```

This allows agents to access the TinyFish infrastructure.

---

## 📊 Example Workflow Execution

User enters task:

Find cheapest laptop charger supplier

System pipeline:

1️⃣ Task sent to workflow engine  
2️⃣ Workflow interpreted into steps  
3️⃣ Agent orchestrator triggers TinyFish agent  
4️⃣ Agent navigates websites  
5️⃣ Results logged and returned  

---

## 📈 Business Impact

Automation can significantly reduce operational workload.

Example scenario:

| Metric | Value |
|------|------|
| Tasks automated | 100 per week |
| Hours saved | 50 hours |
| Cost savings | $1,250 |

TaskLoft enables companies to scale operations without increasing headcount.

---

## Reliability & Monitoring

TaskLoft includes:

• workflow logging  
• execution tracking  
• error handling  
• automation metrics  

This ensures visibility into agent activity and system reliability.

---

## 🚀 Future Roadmap

Future enhancements include:

• visual workflow builder  
• multi-agent collaboration  
• marketplace of automation templates  
• enterprise integrations (CRM, ERP)  
• AI-driven decision agents  

---

## 🌎 Potential Applications

TaskLoft can be applied across multiple industries:

- Procurement  
- Sales automation  
- Market intelligence  
- HR operations  
- Logistics monitoring  
- Vendor management  

---

## 🏆 Why This Matters

The next generation of the internet will not just be used by humans.

It will be used by autonomous software agents performing real work.

TaskLoft demonstrates how the Agentic Web can transform everyday business operations.

---

### 🎥 Demo

Demo :

https://taskloft.vercel.app

The demo shows:

• workflow creation  
• agent execution  
• web navigation  
• monitoring dashboard  

---

### 👨‍💻 Author

Mahera Umangkumar Ramabhai

- B.Tech Aeronautical Engineering   
- Passionate about building AI systems that automate real-world operations.

---

### 📜 License

MIT License
