analise-operacional - Ready

Conteúdo:
- Next.js dashboard (app/) with endpoints and upload
- Server API prediction using @tensorflow/tfjs (dynamically imported)
- Jest tests for forecast functions in /tests

Setup:
1. Create .env.local with:
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_KEY=...
2. npm install
3. npm run test
4. npm run dev

Notes:
- TFJS is imported dynamically in /api/predict to avoid build-time issues.
- If deploying to Vercel, ensure dependencies are installed correctly.
