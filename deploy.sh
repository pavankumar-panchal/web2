#!/bin/bash

echo "🚀 Starting deployment to GitHub Pages..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to GitHub Pages
    echo "📤 Deploying to GitHub Pages..."
    npx gh-pages -d dist --remove "**/*" --add
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "🌐 Your site is available at: https://pavankumar-panchal.github.io/web2/"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi