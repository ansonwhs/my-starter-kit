#!/bin/sh

# Prompt for user to input app name

read -p "What is your project name?: " projectName
echo "Creating React App with Typescript and Vite ${projectName}"

# ========================================================================================

# create app

npm create vite@latest ${projectName} -- --template react-ts

cd ${projectName}

npm i

# ========================================================================================

echo "Creating .env files"

# create env file for development mode

echo "VITE_APPLICAITON_NAME='React Web Application with Typescript and Vite (Development Mode)'" >> .env.development

# create env file for production mode

echo "VITE_APPLICAITON_NAME='React Web Application with Typescript and Vite (Production Mode)'" >> .env.production