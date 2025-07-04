FROM node:18.20.4

# Define el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de la aplicación
COPY package.json package-lock.json ./

# Instala las dependencias de producción sin importar si esta solo .next
RUN npm install --production

# Copia todo el código fuente
# COPY . .
COPY next.config.js ./
# Realiza el build de la aplicación
# RUN npm run build

# Expone el puerto (si es necesario)
EXPOSE 3000

# Comando de inicio del contenedor
CMD ["npm", "start"]

# FROM node:18.20.4

# ADD start.sh /start.sh
# RUN chmod 755 /start.sh
# CMD ["/start.sh"]


#Creates a layer from node:alpine image.
# FROM node:14.9

# #Creates directories
# #RUN mkdir -p /usr/src/app

# #Sets an environment variable
# ENV PORT 3000

# #Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
# WORKDIR /usr/src/app

# #Copy new files or directories into the filesystem of the container
# #COPY package.json /usr/src/app
# #COPY package-lock.json /usr/src/app

# #Execute commands in a new layer on top of the current image and commit the results
# #RUN npm install

# ##Copy new files or directories into the filesystem of the container
# COPY . /usr/src/app

# #Execute commands in a new layer on top of the current image and commit the results
# #RUN npm run build
# RUN chmod 755 node_modules/next

# #Informs container runtime that the container listens on the specified network ports at runtime
# EXPOSE 3000

# #Allows you to configure a container that will run as an executable
# ENTRYPOINT ["npm", "run","prod"]