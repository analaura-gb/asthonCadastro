FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npx prisma generate

EXPOSE 8081

CMD ["npm", "run", "dev"]
