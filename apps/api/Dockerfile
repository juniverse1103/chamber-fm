# Dockerfile for NestJS API
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm install
EXPOSE 2000
CMD ["pnpm", "run", "start:dev"]
