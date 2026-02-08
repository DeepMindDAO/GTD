# GTD 工程级 Web + API

本仓库提供一个工程级 GTD 原型：
- **前端**：React (Vite) 控制台
- **后端**：Python FastAPI 提供 API 示例

## 目录结构

```
.
├── backend
│   ├── main.py
│   └── requirements.txt
└── frontend
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src
        ├── App.jsx
        ├── data.js
        ├── main.jsx
        ├── styles.css
        ├── components
        └── pages
```

## 前端启动

```bash
cd frontend
npm install
npm run dev
```

打开 <http://localhost:5173>。

## 后端启动

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

健康检查：<http://localhost:8000/api/health>

## 后续扩展建议

- 将 `frontend/src/data.js` 替换为从 API 拉取的数据。
- 在 `backend` 增加数据库（PostgreSQL）与任务调度（Celery/Redis）。
- 为提醒模块增加消息源插件化目录（行情、宏观、社媒）。
