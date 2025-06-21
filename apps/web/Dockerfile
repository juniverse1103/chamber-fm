# Monorepo-aware Dockerfile for the 'web' application
FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

#-----------------------------------------------------------------------
FROM base AS builder

# Accept the database URL as a build argument
ARG DATABASE_URL
# Set it as an environment variable for the build process
ENV DATABASE_URL=${DATABASE_URL}

WORKDIR /app

# Copy all package manifests and lockfile
COPY package.json ./ 
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY apps/api/package.json ./apps/api/

# Install all monorepo dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the web application using the root build script
RUN pnpm run build:web

#-----------------------------------------------------------------------
FROM base AS runner
WORKDIR /app

# Copy production artifacts from the builder stage
COPY --from=builder /app/apps/web/.next ./apps/web/.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web/package.json ./apps/web/package.json
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-workspace.yaml ./
COPY --from=builder /app/apps/web/public ./apps/web/public

WORKDIR /app/apps/web

EXPOSE 3000
CMD ["pnpm", "start"]
