# Etapa de construcción
FROM node:18-alpine 

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY . .

RUN npm install
RUN npm run build


EXPOSE 3000

CMD ["node", "dist/main"]
