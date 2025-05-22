# Domain Setup Instructions for singhskaurs.com

The domain `singhskaurs.com` is already configured in Vercel to point to your project, but the nameservers need to be updated with your domain registrar.

## Current Status

- ✅ Domain is linked to the `singhskaurs-blog` project in Vercel
- ❌ Nameservers are not correctly configured (currently using registrar's nameservers)

## Required Nameserver Changes

Update the nameservers at your domain registrar to:

1. `ns1.vercel-dns.com`
2. `ns2.vercel-dns.com`

## Steps to Update Nameservers

1. Log in to your domain registrar account (where you purchased singhskaurs.com)
2. Navigate to the domain management section
3. Look for "Nameservers" or "DNS Settings"
4. Replace the current nameservers with Vercel's nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
5. Save the changes

## Verification

After updating the nameservers, it may take 24-48 hours for the changes to propagate. You can verify the status by running:

```bash
vercel domains inspect singhskaurs.com
```

When properly configured, both nameservers should show a ✓ instead of ✘.

## Additional Domain Configuration

The following domains are already configured to point to your project:
- singhskaurs.com
- www.singhskaurs.com

No additional configuration is needed once the nameservers are updated.