# 🎙️ Chamber.fm

[![Chamber.fm CI](https://github.com/juniverse1103/chamber-fm/actions/workflows/ci.yml/badge.svg)](https://github.com/juniverse1103/chamber-fm/actions/workflows/ci.yml)


A privacy-first, AI-powered voice inbox for the modern era. Send and receive secure, transcribed, and moderated audio messages — with Stripe payments and GPU-accelerated AI.

---

## 🧱 Tech Stack

| Layer      | Stack                                                       |
| ----------| ----------------------------------------------------------- |
| Frontend   | Next.js 14 (App Router), Tailwind CSS, Vercel              |
| API        | NestJS (TypeScript), PostgreSQL (Cloud SQL), GCP Cloud Run |
| AI         | FastAPI (Python), Whisper, GPT (OpenAI), GCP A10G          |
| Notify     | Resend (Email), WebPush/OneSignal (future)                 |
| Payments   | Stripe Checkout, Webhooks (NestJS)                         |
| Storage    | Cloudflare R2 (voice blobs, signed URLs)                   |

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

---

## 🛡️ Development Workflow & Code Quality

This project uses a set of tools and practices to ensure code quality, consistency, and a smooth development experience.

### Linting & Formatting

- **ESLint**: We use ESLint for identifying and fixing problems in JavaScript and TypeScript code.
    - The `apps/api` service uses the modern ESLint flat config (`eslint.config.js`), which includes ignore patterns directly.
    - Other apps/packages may use `.eslintrc.json` and potentially `.eslintignore`.
    - To run lint checks for a specific app (e.g., `api`):
      ```bash
      pnpm --filter api lint
      ```
    - To attempt to automatically fix lint issues for a specific app:
      ```bash
      pnpm --filter api lint:fix
      ```
    - To run lint checks for all workspaces:
      ```bash
      pnpm lint
      ```
- **Prettier**: Code formatting is handled by Prettier, integrated with ESLint.
    - To check formatting for all workspaces:
      ```bash
      pnpm format
      ```
    - To automatically fix formatting:
      ```bash
      pnpm format:fix
      ```
- **Type Checking**: TypeScript is used for static type checking.
    - To type check all workspaces:
      ```bash
      pnpm typecheck
      ```

### Commit Hooks (Husky & lint-staged)

- **Husky**: Manages Git hooks to automate tasks.
- **lint-staged**: Runs linters and formatters on staged files before committing.
- **commitlint**: Enforces conventional commit messages.
- **Pre-commit**: Before each commit, `lint-staged` will automatically:
    - Run ESLint and Prettier on staged files.
    - If any checks fail, the commit will be aborted.
- **Commit Message Hook**: Before each commit message is finalized, `commitlint` will:
    - Ensure the message adheres to the Conventional Commits specification.
    - If the check fails, the commit will be aborted.

### Continuous Integration (CI)

- **GitHub Actions**: Our CI pipeline is defined in `.github/workflows/ci.yml`.
- **Key Checks**: On every push and pull request (targeting `main` or `develop`), the CI pipeline runs:
    - **Lint, Format & Type Check (Monorepo)**: Ensures code style, formatting, and type safety across the entire monorepo.
    - **Test AI (FastAPI)**: Runs tests for the AI service.
    - **Test API (NestJS)**: Runs tests for the main API service.
    - **Test Web (Next.js)**: Runs tests for the web frontend.
- **Branch Protection**:
    - The `main` branch is protected. Changes must be made via Pull Request.
    - All CI checks listed above must pass before a PR can be merged into `main`.

### Branching Strategy

- **`develop`**: Main development branch. New features and fixes are typically merged here first.
- **`main`**: Production branch. Represents the latest stable release. Changes are merged from `develop` to `main` via Pull Requests after all checks pass.
- **Feature Branches**: Create branches off `develop` for new features (e.g., `feat/my-new-feature` or `fix/bug-fix`).

### Contributing Notes

- Ensure you have `pnpm` installed (see "Getting Started").
- After cloning, run `pnpm install`.
- Use the provided scripts (e.g., `pnpm --filter <app> lint`, `pnpm format`) to maintain code quality.
- Commit messages will be validated automatically.
- All code is checked again in CI for safety and consistency.