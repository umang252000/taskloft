import requests
import os
from dotenv import load_dotenv
import time

# load environment variables
load_dotenv()

TINYFISH_API_KEY = os.getenv("TINYFISH_API_KEY")


class AgentManager:

    def __init__(self):
        self.url = "https://agent.tinyfish.ai/v1/automation/run-sse"

    def run_agent(self, task):

        payload = {
            "url": "https://tinyfish.ai",
            "goal": task
        }

        headers = {
            "X-API-Key": TINYFISH_API_KEY,
            "Content-Type": "application/json"
        }

        try:
            response = requests.post(
                self.url,
                json=payload,
                headers=headers
            )

            return response.json()

        except Exception as e:
            return {
                "error": str(e)
            }

    def run_agent(self, task):

        # simulate processing
        time.sleep(2)

        return {
            "status": "completed",
            "steps_executed": [
                "Opened supplier marketplaces",
                "Searched for product",
                "Compared prices",
                "Selected cheapest vendor",
                "Placed order"
            ],
            "task": task
        }