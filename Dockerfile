FROM node:17.2.0-alpine
MAINTAINER binjie09
ADD . /app/
WORKDIR /app
RUN npm install
EXPOSE 3000
#程序启动脚本
CMD ["npm", "run", "prod"]
