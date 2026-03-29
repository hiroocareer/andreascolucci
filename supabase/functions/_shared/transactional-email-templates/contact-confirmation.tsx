import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Andreas Colucci"

interface ContactConfirmationProps {
  name?: string
  message?: string
}

const ContactConfirmationEmail = ({ name, message }: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thank you for reaching out to {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Thank you, ${name}.` : 'Thank you for reaching out.'}
        </Heading>
        <Text style={text}>
          Your message has been received. I will review it and get back to you as soon as possible.
        </Text>
        {message && (
          <>
            <Hr style={hr} />
            <Text style={label}>Your message:</Text>
            <Text style={quote}>{message}</Text>
          </>
        )}
        <Hr style={hr} />
        <Text style={footer}>
          Andreas Colucci — Event Tech & Operations Consultant
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'Thank you for your message',
  displayName: 'Contact form confirmation',
  previewData: { name: 'Jane', message: 'I would like to discuss a collaboration for an upcoming event.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '40px 32px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: '600' as const, color: '#141414', margin: '0 0 24px', letterSpacing: '-0.02em' }
const text = { fontSize: '15px', color: '#737373', lineHeight: '1.6', margin: '0 0 24px' }
const label = { fontSize: '11px', color: '#737373', textTransform: 'uppercase' as const, letterSpacing: '0.1em', margin: '0 0 8px', fontWeight: '500' as const }
const quote = { fontSize: '14px', color: '#141414', lineHeight: '1.6', margin: '0 0 24px', fontStyle: 'italic' as const }
const hr = { borderColor: '#e0e0e0', margin: '24px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '0' }
