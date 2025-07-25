FROM node:18-alpine

WORKDIR /app
RUN npm install -g pnpm
COPY . .

RUN pnpm install
RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]
