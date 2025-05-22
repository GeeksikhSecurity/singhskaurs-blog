# How to Remove Password Protection from Vercel Deployment

The login prompt you're seeing in Chrome is likely due to password protection being enabled on your Vercel project. Since this can't be disabled directly through the Vercel CLI, you'll need to use the Vercel dashboard.

## Steps to Remove Password Protection:

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your team "singhs-kaurs-designs"
3. Click on the "singhskaursblog" project
4. Navigate to "Settings" in the top navigation
5. In the left sidebar, look for "Password Protection" or "Security"
6. Toggle off the password protection feature
7. Save your changes

## Alternative Method:

If you can't find the password protection setting, try these steps:

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your team "singhs-kaurs-designs"
3. Click on the "singhskaursblog" project
4. Click on "Deployments" in the top navigation
5. Find your latest deployment and click on the three dots (...)
6. Select "Promote to Production"
7. This will make your latest deployment (which has `"public": true` in vercel.json) the production version

## Verify:

After making these changes, visit your site again in Chrome and the login prompt should be gone.

URL: https://singhskaursblog-zleo9cr4p-singhs-kaurs-designs.vercel.app