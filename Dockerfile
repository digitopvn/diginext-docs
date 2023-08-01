# STAGE #1 - Build

FROM node:latest as builder

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

# STAGE #1 - Run

FROM nginx:alpine-slim

WORKDIR /app

# COPY --from=builder /app/build .
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# CMD ["npm", "start"]
# CMD ["npm", "run", "serve"]