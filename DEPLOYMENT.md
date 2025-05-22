# Deployment Guide

This document outlines the steps to deploy the SinghsKaurs Blog to Vercel using GitHub integration and the Vercel CLI.

## Prerequisites

- A GitHub account
- A Vercel account (can sign up with GitHub)
- Node.js installed locally (version 18 or higher recommended)
- Vercel CLI installed (`npm install -g vercel`)

## Deployment Options

### Option 1: GitHub Integration (Recommended)

1. **Push your code to GitHub**

   Ensure your code is pushed to the GitHub repository:
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**

   - Go to [Vercel](https://vercel.com) and sign in with GitHub
   - Click "Add New..." > "Project"
   - Select the "singhskaurs-blog" repository
   - Keep the default settings (Framework preset: Vite)
   - Click "Deploy"

3. **Configure Environment Variables (if needed)**

   - Go to your project settings in Vercel
   - Navigate to the "Environment Variables" tab
   - Add any required environment variables

### Option 2: Vercel CLI

1. **Login to Vercel CLI**

   ```bash
   vercel login
   ```

2. **Deploy from your local directory**

   ```bash
   # Navigate to your project directory
   cd /path/to/singhskaurs-blog
   
   # Deploy to Vercel
   vercel
   
   # For production deployment
   vercel --prod
   ```

3. **Link to existing project (if redeploying)**

   ```bash
   vercel link
   ```

## GitHub Actions Workflow

The repository includes a GitHub Actions workflow that automatically deploys to Vercel when changes are pushed to the main branch.

### Setting up GitHub Actions

1. **Add Vercel secrets to GitHub**

   Go to your GitHub repository > Settings > Secrets and variables > Actions, and add:
   
   - `VERCEL_TOKEN`: Your Vercel API token (get from Vercel account settings)
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

2. **Get Vercel project information**

   If you don't know your project and org IDs, run:
   ```bash
   vercel project ls
   ```

3. **The workflow will automatically run on push to main**

   The workflow file is located at `.github/workflows/vercel-deploy.yml`

## Custom Domain Setup

1. **Add your domain in Vercel**

   - Go to your project in Vercel
   - Navigate to "Settings" > "Domains"
   - Add your domain and follow the DNS configuration instructions

2. **Configure DNS**

   Update your domain's DNS settings according to Vercel's instructions.

## Troubleshooting

- **Build failures**: Check the build logs in Vercel for specific errors
- **Deployment issues**: Ensure all environment variables are correctly set
- **Preview deployments**: Each PR will get a preview deployment URL automatically

## Monitoring

- Monitor your deployment status in the Vercel dashboard
- Set up alerts for deployment failures if needed

## Rollbacks

If needed, you can roll back to a previous deployment:

1. Go to your project in Vercel
2. Navigate to "Deployments"
3. Find the deployment you want to revert to
4. Click the three dots menu and select "Promote to Production"