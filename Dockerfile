# Dockerfile

# --- Stage 1: Build the React Application ---
    FROM node:20-alpine as build-stage

    WORKDIR /app
    
    # Copy package.json and package-lock.json first to leverage Docker cache
    # This ensures npm install is only re-run if dependencies change
    COPY package*.json ./
    
    # Install project dependencies
    RUN npm install
    
    # Copy the rest of your application code
    COPY . .
    
    # Build the React application for production
    # This command generates static files in the 'dist' directory
    RUN npm run build
    
    # --- Stage 2: Serve the Application with Nginx ---
    FROM nginx:alpine as production-stage
    
    # Copy the built React app from the build-stage to Nginx's default public directory
    COPY --from=build-stage /app/dist /usr/share/nginx/html
    
    # Copy your custom Nginx configuration
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Expose port 80, which Nginx will listen on for incoming HTTP requests
    EXPOSE 80
    
    # Command to run Nginx when the container starts
    # 'daemon off;' keeps Nginx in the foreground so Docker can manage it
    CMD ["nginx", "-g", "daemon off;"]