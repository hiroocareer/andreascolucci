# andreascolucci.com

Personal website for Andreas Colucci, built with React + Vite and hosted on GitHub Pages. Contact form is handled by a Supabase Edge Function that sends email via Resend.

## Stack

- **Frontend**: React 18, Vite, Tailwind CSS, shadcn/ui
- **Hosting**: GitHub Pages
- **Contact form**: Supabase Edge Functions (`notify-contact`) + Resend

## Development

```bash
npm install
npm run dev
```

## Deploy

Push to `main` — GitHub Actions builds and deploys to GitHub Pages automatically.

The `notify-contact` Edge Function is deployed separately via the Supabase CLI:

```bash
supabase functions deploy notify-contact --project-ref oujoxvvjpbidershgrmt
```
