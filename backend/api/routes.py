from fastapi import APIRouter
from workflows.workflow_engine import WorkflowEngine
from workflows.interpreter import WorkflowInterpreter
from logs.logger import get_logs
from workflows.scheduler import add_daily_procurement, add_daily_monitor
from workflows.metrics import compute_metrics

router = APIRouter()

engine = WorkflowEngine()

@router.post("/run-procurement")
def run_procurement(product: str):

    result = engine.run_procurement(product)

    return result


@router.post("/run-competitor-monitor")
def run_monitor(site: str):

    result = engine.run_competitor_monitor(site)

    return result


@router.post("/run-job-posting")
def run_job(job_title: str):

    result = engine.run_job_posting(job_title)

    return result

interpreter = WorkflowInterpreter()

@router.post("/run-workflow")
def run_workflow(data: dict):

    task = data.get("task")

    result = interpreter.interpret(task)

    return result

@router.get("/logs")
def fetch_logs():
    return get_logs()

@router.post("/schedule-procurement")
def schedule_procurement(product: str):

    add_daily_procurement(product)

    return {"status": "scheduled", "product": product}


@router.post("/schedule-monitor")
def schedule_monitor(site: str):

    add_daily_monitor(site)

    return {"status": "scheduled", "site": site}

@router.get("/metrics")
def metrics():

    return compute_metrics()