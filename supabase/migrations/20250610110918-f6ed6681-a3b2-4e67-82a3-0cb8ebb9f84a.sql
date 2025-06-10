
-- Create a table to store contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed'))
);

-- Add Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public insertions (for the contact form)
CREATE POLICY "Allow public contact form submissions" 
  ON public.contact_submissions 
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to view submissions (optional, for admin)
CREATE POLICY "Allow authenticated users to view submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  TO authenticated
  USING (true);

-- Create an index for performance
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);
