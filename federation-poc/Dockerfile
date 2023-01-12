FROM node:18

ARG port
ARG apollo_key

RUN echo ${apollo_key}
RUN echo ${port}

ENV APOLLO_GRAPH_REF=dogpark-poc-nz045m@current
ENV APOLLO_KEY=$apollo_key
ENV PORT=$port



COPY dist/ .

COPY package.json .

RUN yarn install

ENTRYPOINT [ "node", "index" ]
