# Email Configuration Setup Guide

## Overview

This portfolio website uses **Gmail SMTP** with **Nodemailer** to send contact form submissions. Email credentials are stored in `.env.local` (never committed to git).

## Steps to Configure Gmail SMTP

### 1. Enable 2-Factor Authentication on your Google Account

- Go to [myaccount.google.com](https://myaccount.google.com)
- Navigate to **Security** > **2-Step Verification**
- Follow prompts to enable 2FA (you'll need a phone number)

### 2. Generate an App Password

- Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- Select **Mail** and **Windows Computer** (or your device)
- Google will generate a **16-character password**
- Copy this password (you'll need it next)

### 3. Create `.env.local` File

In the root of your project, create a `.env.local` file with:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=xxxx-xxxx-xxxx-xxxx
SMTP_FROM_EMAIL=your-email@gmail.com
SMTP_TO_EMAIL=your-email@gmail.com
```

**Replace:**

- `your-email@gmail.com` with your actual Gmail address
- `xxxx-xxxx-xxxx-xxxx` with the **16-character app password** from step 2

### 4. Security Notes

- ⚠️ **Never** commit `.env.local` to git (it's already in `.gitignore`)
- ⚠️ **Never** share your app password
- The app password is different from your Gmail password
- Only Gmail addresses and app passwords work with this setup

### 5. Test the Configuration

1. Run `npm run dev` to start the development server
2. Navigate to the contact page
3. Fill out the form and click "Send Message"
4. Check your email inbox for the submission
5. If it fails, check the browser console and server logs for error messages

## Environment Variables Explained

| Variable          | Example                | Description                                           |
| ----------------- | ---------------------- | ----------------------------------------------------- |
| `SMTP_HOST`       | `smtp.gmail.com`       | Gmail's SMTP server address                           |
| `SMTP_PORT`       | `587`                  | TLS port (use 587 for Gmail)                          |
| `SMTP_SECURE`     | `false`                | TLS authentication (false for port 587, true for 465) |
| `SMTP_USER`       | `your-email@gmail.com` | Your Gmail address                                    |
| `SMTP_PASSWORD`   | `xxxx-xxxx-xxxx-xxxx`  | 16-char app password (NOT your Gmail password)        |
| `SMTP_FROM_EMAIL` | `your-email@gmail.com` | Email address shown as sender                         |
| `SMTP_TO_EMAIL`   | `your-email@gmail.com` | Where contact submissions are sent                    |

## Troubleshooting

### "Email service not configured"

- Verify `SMTP_USER` and `SMTP_PASSWORD` are set in `.env.local`
- Check that the file is named `.env.local` (not `.env`)
- Restart your dev server after creating/editing `.env.local`

### "Invalid login credentials"

- Your **16-character app password** may be incorrect
- App passwords are different from your Gmail password
- Make sure you generated it from [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- Re-generate a new one if unsure

### "Failed to send email"

- Check internet connection
- Verify SMTP credentials are correct
- Less secure apps: Ensure your account allows "Less secure app access" or use App Passwords instead
- Check server logs for detailed error messages

### Form submits but email doesn't arrive

- Check spam/junk folder
- Verify `SMTP_TO_EMAIL` is the correct destination
- Check that `SMTP_FROM_EMAIL` matches your Gmail account

## Production Deployment

For production (Vercel, etc.):

1. Add these environment variables to your deployment platform:
   - Vercel: Settings > Environment Variables
   - Or similar for your hosting provider
2. Use the same `.env.local` values
3. Test thoroughly before going live

**Note:** Gmail App Passwords are account-specific. For production, consider using a dedicated Gmail account or enterprise email service.
