# Utiliser Node.js Alpine comme image de base
FROM node:alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet dans le conteneur
COPY . .

# Déclarer un volume pour le répertoire de travail
VOLUME /app

# Exposer le port sur lequel l'application va s'exécuter
EXPOSE 3000

# Activer le hot reload en mode développement
RUN npm install -g nodemon
CMD ["nodemon", "--watch", "src", "--exec", "npm", "run", "dev"]