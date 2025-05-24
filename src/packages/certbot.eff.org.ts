export const certbotefforgPackage = {
  name: 'certbot' as const,
  domain: 'certbot.eff.org' as const,
  description: 'Certbot is EFF\'s tool to obtain certs from Let\'s Encrypt and (optionally) auto-enable HTTPS on your server.  It can also act as a client for any other CA that uses the ACME protocol.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/certbot.eff.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) certbot' as const,
  programs: [
    'certbot',
  ] as const,
  companions: [] as const,
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [
    '4.0.0',
    '3.3.0',
    '3.2.0',
    '3.1.0',
    '3.0.1',
    '3.0.0',
    '2.11.1',
    '2.11.0',
    '2.10.0',
    '2.9.0',
    '2.8.0',
    '2.7.4',
    '2.7.3',
    '2.7.2',
    '2.7.1',
    '2.7.0',
    '2.6.0',
  ] as const,
  fullPath: 'certbot.eff.org' as const,
  aliases: [] as const,
}

export type CertbotefforgPackage = typeof certbotefforgPackage
