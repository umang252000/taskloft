from logs.logger import get_logs

def compute_metrics():

    logs = get_logs()

    total_tasks = len(logs)

    hours_saved = total_tasks * 0.5

    cost_saved = hours_saved * 25

    return {
        "total_tasks": total_tasks,
        "hours_saved": hours_saved,
        "cost_saved": cost_saved
    }