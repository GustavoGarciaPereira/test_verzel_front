# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie apenas os arquivos de definição de dependências para o contêiner
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie os outros arquivos do projeto Angular para o contêiner
COPY . .

# Exponha a porta 4200 (a porta padrão do ng serve)
EXPOSE 4200

# Inicie o servidor de desenvolvimento do Angular com o comando "npm start"
CMD ["npm", "start"]
