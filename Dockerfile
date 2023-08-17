FROM node:20.5.0-alpine3.18 AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY . .
RUN npm ci
RUN ls

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]