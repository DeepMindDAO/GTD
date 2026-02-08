from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="GTD API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def health_check():
    return {"status": "ok"}


@app.get("/api/todos")
async def list_todos():
    return [
        {"title": "梳理本周目标", "due": "10:30", "tag": "高优先"},
        {"title": "更新加密市场观察", "due": "13:00", "tag": "行情"},
        {"title": "安排团队同步会议", "due": "15:30", "tag": "协作"},
    ]


@app.get("/api/habits")
async def list_habits():
    return [
        {"name": "晨间复盘", "streak": 7, "progress": 80},
        {"name": "英语阅读", "streak": 21, "progress": 60},
        {"name": "运动 30 分钟", "streak": 14, "progress": 40},
    ]


@app.get("/api/summary")
async def daily_summary():
    return {
        "focus": "完成 5 个番茄、习惯打卡 3 项，关键任务完成率 75%。",
        "insight": "宏观政策与市场波动保持关注，建议设定价格警戒线。",
    }


@app.get("/api/alerts")
async def list_alerts():
    return [
        {"title": "BTC 价格波动 > 5%", "source": "行情监控", "level": "高"},
        {"title": "美联储发言要点更新", "source": "宏观", "level": "中"},
        {"title": "CZ 推文热度升高", "source": "社媒", "level": "中"},
    ]
