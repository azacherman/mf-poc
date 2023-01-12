FROM public.ecr.aws/lambda/nodejs:16

COPY dist/ ${LAMBDA_TASK_ROOT}

COPY package.json ${LAMBDA_TASK_ROOT}

RUN npm install

CMD ["index.handler"]

# aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws

