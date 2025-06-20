# 🎙️ Chamber.fm

A privacy-first, AI-powered voice inbox for the modern era. Send and receive secure, transcribed, and moderated audio messages — with real-time updates, Stripe payments, and GPU-accelerated AI.

---

## 🧱 Tech Stack

| Layer      | Stack                                                       |
| ----------| ----------------------------------------------------------- |
| Frontend   | Next.js 14 (App Router), Tailwind CSS, Vercel              |
| API        | NestJS (TypeScript), PostgreSQL (Cloud SQL), GCP Cloud Run |
| AI         | FastAPI (Python), Whisper, GPT (OpenAI), GCP A10G          |
| Realtime   | Elixir + Phoenix Channels, Fly.io or GCP VM                |
| Storage    | Cloudflare R2 (voice blobs, signed URLs)                   |
| Payments   | Stripe Checkout, Webhooks (NestJS)                         |
| Notify     | Resend (Email), WebPush/OneSignal (future)                 |
✨ What It Does
	•	Voice-to-text (Whisper): Converts audio to text with near-human accuracy
	•	GPT moderation & summarization: Filters spam, abuse, and gives a 5-word summary headline
	•	Inbox UI: See a list of incoming Echoes with headlines and choose which to play
	•	Wallet-based credit system: Only pay (or earn) for minutes you listen to

---

🧱 Project Structure

chamber-fm/
├── apps/
│   ├── web/        # Next.js frontend (UI, PWA)
│   ├── api/        # NestJS backend (credits, users, inbox, payments)
│   ├── ai/         # FastAPI server for Whisper + GPT processing
│   └── realtime/   # Elixir + Phoenix Channels (WebSocket, inbox updates)
├── packages/
│   └── ui/         # Shared UI components (optional)
├── infra/          # Terraform/GCP/Cloudflare setup (optional)
├── windsurf/       # (Optional) Windsurf flows and AI pipelines
├── .env            # Environment variables
├── package.json    # pnpm workspace config
└── README.md


⸻

🚀 Getting Started

1. Clone & setup project

pnpm install

Make sure you’re using pnpm and Node.js >= 18

2. Setup sub-apps

You can scaffold the apps like this:

apps/web (Next.js)

cd apps/web
pnpm create next-app . --ts --app --tailwind

apps/api (NestJS)

cd apps/api
nest new .

apps/ai (FastAPI + Whisper + GPT)
	•	Use poetry or venv
	•	Include endpoints for:
	•	POST /stt → audio → Whisper transcript
	•	POST /summary → transcript → GPT filter + 5-word summary

3. (Optional) Setup Windsurf

cd chamber-fm
git clone https://github.com/windsurfxyz/windsurf

Configure your .env with your OpenAI key and any other provider tokens.

⸻

🔐 Environment Variables

# .env
OPENAI_API_KEY=sk-...
NEXT_PUBLIC_API_URL=http://localhost:3001
BACKEND_API_URL=http://localhost:3002


⸻

💳 Payments (for future)
	•	Uses Stripe Checkout to purchase “listening credits”
	•	15 minutes free; $4 = 20 minutes credit

⸻

📊 MVP Success Metrics

Funnel Step	Goal
Visit → Voice drop	≥ 40%
Transcription pass rate	≥ 95%
Inbox Echo → Played	≥ 80%
15-min host recharge rate	≥ 15%
Infra cost / revenue	≤ 40%


⸻

🧠 Why Chamber.fm?
	•	Voice is warmer than text, but harder to scan
	•	AI makes it searchable, filterable, and safer
	•	Great for podcasters, coaches, long-distance couples, async teams

⸻

🛠 Stack
	•	Frontend: Next.js + TailwindCSS
	•	Backend: NestJS + PostgreSQL + Redis
	•	AI: FastAPI + Whisper + GPT (via OpenAI)
	•	Storage: Cloudflare R2
	•	Payments: Stripe Checkout
	•	Deployment: Vercel (web), Render (API), GCP A10G (AI)

⸻

📬 Example Use
	1.	A fan visits chamber.fm/artist and records a 60s question
	2.	AI summarizes it as: “Fan asks about your next tour”
	3.	Artist sees the summary and listens to it, using 1 minute of credit
	4.	Artist optionally replies with a TTS response (future)

⸻

🧪 Dev Notes
	•	Whisper is run on a GPU-enabled container
	•	GPT summarization is flow-driven via Windsurf (or raw OpenAI API)
	•	Inbox triage UI designed for keyboard-first quick review

⸻

🧼 To Do (MVP Scope)
	•	Record/upload voice widget (MediaRecorder API)
	•	STT + GPT backend endpoints
	•	Inbox UI with headlines and audio player
	•	Credit system integration
	•	Stripe checkout flow
	•	Basic email/push notifications

⸻

🧑‍🚀 Author

Jun Son
	•	juniverse1103@gmail.com
	•	@juniverse1103

⸻

Ready to launch Chamber.fm 🚀