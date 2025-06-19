/**
 * **certbot** - Certbot is EFF's tool to obtain certs from Let's Encrypt and (optionally) auto-enable HTTPS on your server.  It can also act as a client for any other CA that uses the ACME protocol.
 *
 * @domain `certbot.eff.org`
 * @programs `certbot`
 * @version `4.1.1` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install certbot`
 * @aliases `certbot`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.certbot
 * // Or access via domain
 * const samePkg = pantry.certbotefforg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "certbot.eff.org"
 * console.log(pkg.description) // "Certbot is EFF's tool to obtain certs from Let'..."
 * console.log(pkg.programs)    // ["certbot"]
 * console.log(pkg.versions[0]) // "4.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/certbot-eff-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const certbotPackage = {
  /**
   * The display name of this package.
   */
  name: 'certbot.eff.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'certbot.eff.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Certbot is EFF\'s tool to obtain certs from Let\'s Encrypt and (optionally) auto-enable HTTPS on your server.  It can also act as a client for any other CA that uses the ACME protocol.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/certbot.eff.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install certbot' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'certbot',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.1.1',
    '4.1.0',
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'certbot',
  ] as const,
}

export type CertbotPackage = typeof certbotPackage
