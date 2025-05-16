#!/bin/bash

# Script to check if Vercel secrets are properly configured
# Save as check-vercel-secrets.sh

echo "🔍 Checking Vercel secrets configuration..."

# Create a temporary workflow file
cat > .github/workflows/secret-check.yml << 'EOL'
name: Vercel Secrets Check
on: workflow_dispatch
jobs:
  check-secrets:
    runs-on: ubuntu-latest
    steps:
      - name: Check for VERCEL_TOKEN
        run: |
          if [ -z "${{ secrets.VERCEL_TOKEN }}" ]; then
            echo "::error::VERCEL_TOKEN is not set"
            exit 1
          else
            echo "✅ VERCEL_TOKEN is configured"
          fi
      - name: Check for VERCEL_PROJECT_ID
        run: |
          if [ -z "${{ secrets.VERCEL_PROJECT_ID }}" ]; then
            echo "::error::VERCEL_PROJECT_ID is not set"
            exit 1
          else
            echo "✅ VERCEL_PROJECT_ID is configured"
          fi
      - name: Check for VERCEL_ORG_ID
        run: |
          if [ -z "${{ secrets.VERCEL_ORG_ID }}" ]; then
            echo "::error::VERCEL_ORG_ID is not set"
            exit 1
          else
            echo "✅ VERCEL_ORG_ID is configured"
          fi
EOL

echo "📤 Committing and pushing the check workflow..."
git add .github/workflows/secret-check.yml
git commit -m "Add workflow to check Vercel secrets"
git push

echo "🚀 Workflow added to your repository"
echo "To check if secrets are configured:"
echo "1. Go to your repository on GitHub"
echo "2. Navigate to Actions > Vercel Secrets Check"
echo "3. Click 'Run workflow'"
echo "4. Check the workflow results"
echo ""
echo "If the workflow succeeds, all secrets are properly configured."
echo "If it fails, check the error message to see which secret is missing."
