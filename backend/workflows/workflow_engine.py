from agents.agent_manager import AgentManager
from datetime import datetime
from logs.logger import log_event

agent = AgentManager()


class WorkflowEngine:

    def run_procurement(self, product):

        # Log start of workflow
        log_event("procurement_agent", "start", "running", product)

        task = f"""
        Open supplier marketplaces
        Search for {product}
        Compare prices
        Choose cheapest vendor
        Add item to cart
        Fill checkout form
        """

        result = agent.run_agent(task)

        # Log completion
        log_event("procurement_agent", "completed", "success", result)

        return {
            "workflow": "procurement",
            "product": product,
            "timestamp": str(datetime.now()),
            "result": result
        }

    def run_competitor_monitor(self, website):

        # Log start
        log_event("competitor_monitor_agent", "start", "running", website)

        task = f"""
        Visit {website}
        Extract product prices
        Save competitor pricing
        """

        result = agent.run_agent(task)

        # Log completion
        log_event("competitor_monitor_agent", "completed", "success", result)

        return {
            "workflow": "competitor_monitor",
            "website": website,
            "timestamp": str(datetime.now()),
            "result": result
        }

    def run_job_posting(self, job_title):

        # Log start
        log_event("job_posting_agent", "start", "running", job_title)

        task = f"""
        Open job board
        Create job listing
        Title: {job_title}
        Submit form
        """

        result = agent.run_agent(task)

        # Log completion
        log_event("job_posting_agent", "completed", "success", result)

        return {
            "workflow": "job_posting",
            "job": job_title,
            "timestamp": str(datetime.now()),
            "result": result
        }