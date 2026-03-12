from agents.agent_manager import AgentManager
from logs.logger import log_event

agent = AgentManager()


class WorkflowInterpreter:

    def interpret(self, task):

        # Log when a task is received
        log_event("workflow_builder", "task_received", "running", task)

        task_lower = task.lower()

        if "order" in task_lower or "buy" in task_lower:

            steps = f"""
            Open supplier marketplaces
            Search product mentioned in task
            Compare prices
            Choose cheapest vendor
            Add to cart
            Fill checkout form
            Place order
            """

        elif "monitor" in task_lower or "price" in task_lower:

            steps = f"""
            Visit competitor websites
            Extract product prices
            Save price data
            Compare with previous data
            """

        elif "post job" in task_lower or "hire" in task_lower:

            steps = f"""
            Open job board
            Fill job listing form
            Submit job post
            """

        else:

            steps = f"""
            Visit relevant websites
            Extract information
            Perform actions based on task
            """

        result = agent.run_agent(steps)

        # Log when workflow execution finishes
        log_event("workflow_builder", "workflow_completed", "success", steps)

        return {
            "task": task,
            "steps": steps,
            "result": result
        }