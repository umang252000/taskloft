from apscheduler.schedulers.background import BackgroundScheduler
from workflows.workflow_engine import WorkflowEngine
from logs.logger import log_event

scheduler = BackgroundScheduler()

engine = WorkflowEngine()


def schedule_procurement(product):

    log_event("scheduler", "procurement_scheduled", "running", product)

    engine.run_procurement(product)


def schedule_monitor(site):

    log_event("scheduler", "monitor_scheduled", "running", site)

    engine.run_competitor_monitor(site)


def start_scheduler():

    scheduler.start()

def add_daily_procurement(product):

    scheduler.add_job(
        schedule_procurement,
        "interval",
        days=1,
        args=[product]
    )


def add_daily_monitor(site):

    scheduler.add_job(
        schedule_monitor,
        "interval",
        days=1,
        args=[site]
    )