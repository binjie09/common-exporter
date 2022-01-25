FROM node:17.2.0-alpine
MAINTAINER binjie09
ADD . /app/
WORKDIR /app
RUN npm install
EXPOSE 3000
ENV eth=0x4c8ee30c603c903241e1840ab721b3b358d3c2af
#程序启动脚本
CMD ["npm", "run", "prod"]
