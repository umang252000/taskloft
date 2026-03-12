from datetime import datetime

logs = []

def log_event(agent, action, status, details=None):

    entry = {
        "timestamp": str(datetime.now()),
        "agent": agent,
        "action": action,
        "status": status,
        "details": details
    }

    logs.append(entry)

    return entry


def get_logs():
    return logs