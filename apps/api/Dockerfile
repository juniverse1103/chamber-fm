# Dockerfile for NestJS API
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm install && pnpm run build
EXPOSE 3000
CMD ["pnpm", "start"]
