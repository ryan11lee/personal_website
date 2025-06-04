# Security Guidelines

This document outlines the security measures implemented in the Data With Ryan website.

## Environment Variables

### ✅ Secure Practices Implemented

1. **No hardcoded secrets** - All sensitive data uses environment variables
2. **Proper .gitignore** - All .env\* files are excluded from version control
3. **Example file provided** - .env.example shows required variables without real values
4. **Runtime validation** - API routes check for proper configuration before execution

### Required Environment Variables

```bash
# Copy .env.example to .env.local and add real values
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PLAUSIBLE_DOMAIN=datawithryan.com
NEXT_PUBLIC_SITE_URL=https://datawithryan.com
```

## API Security

### Contact Form Protection (`/api/contact`)

1. **Input Validation**

   - Required field validation
   - Email format validation
   - Length limits: name (100), subject (200), message (2000)

2. **XSS Prevention**

   - HTML escaping for all user inputs
   - Safe handling in email templates

3. **Spam Protection**

   - Basic keyword filtering
   - Input length restrictions
   - Email format validation

4. **Error Handling**
   - No sensitive information in error messages
   - Proper HTTP status codes
   - Graceful failure handling

## Deployment Security

### Vercel Configuration

1. **Environment Variables**

   - Set RESEND_API_KEY in Vercel dashboard
   - Never expose in repository or logs

2. **Domain Configuration**
   - Custom domain: datawithryan.com
   - HTTPS enforced by default
   - Proper CORS handling

### Build Security

1. **Dependencies**

   - Regular npm audit checks
   - No dev dependencies in production
   - Minimal attack surface

2. **Code Quality**
   - TypeScript for type safety
   - ESLint for code quality
   - Prettier for consistency

## Content Security

### Blog Posts (MDX)

1. **Static Generation**
   - No dynamic content execution
   - Safe frontmatter parsing
   - Sanitized HTML output

### User Generated Content

1. **Contact Form Only**
   - No user accounts or authentication
   - No content persistence
   - Email-only communication

## Monitoring & Maintenance

### Security Checklist

- [ ] Regular dependency updates
- [ ] Environment variable rotation
- [ ] Log monitoring for suspicious activity
- [ ] Error rate monitoring
- [ ] Performance monitoring

### Emergency Procedures

1. **Compromised API Key**

   - Revoke in Resend dashboard
   - Update environment variables
   - Redeploy application

2. **Suspicious Activity**
   - Check Vercel logs
   - Monitor error rates
   - Update spam filters if needed

## Best Practices for Future Development

1. **Never commit secrets**
2. **Validate all inputs**
3. **Escape all outputs**
4. **Use HTTPS everywhere**
5. **Keep dependencies updated**
6. **Monitor for vulnerabilities**
7. **Principle of least privilege**

## Security Tools

- **ESLint**: Code quality and security linting
- **TypeScript**: Type safety
- **Next.js**: Built-in security headers
- **Vercel**: Platform security features

## Contact for Security Issues

For security-related issues, please email: security@datawithryan.com
