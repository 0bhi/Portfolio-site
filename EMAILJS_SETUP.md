# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form on your portfolio site.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Add an Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (from personalInfo)

4. Example template:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```

5. Note your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxxxxxx`)

## Step 5: Add Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Replace the placeholder values with your actual IDs and keys

## Step 6: Restart Your Development Server

After adding the environment variables, restart your Next.js development server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox for the message

## Fallback Behavior

If EmailJS is not configured, the form will fall back to opening your default email client with a pre-filled message. This ensures the contact form always works, even without EmailJS setup.

## Troubleshooting

- **Form not sending**: Check that all environment variables are correctly set
- **Emails not received**: Verify your email service is properly connected in EmailJS
- **Template errors**: Ensure all template variables match exactly (case-sensitive)

## Security Note

The Public Key is safe to expose in client-side code. Never share your Private Key or API Secret.

