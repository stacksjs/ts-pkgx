/**
 * **certbot.eff.org** - Package from pantry: certbot.eff.org
 *
 * @domain `certbot.eff.org`
 *
 * @install `launchpad install certbot.eff.org`
 * @dependencies `python.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.certbotefforg
 * console.log(pkg.name)        // "certbot.eff.org"
 * console.log(pkg.description) // "Package from pantry: certbot.eff.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/certbot-eff-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const certbotefforgPackage = {
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
  description: 'Package from pantry: certbot.eff.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install certbot.eff.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/certbot.eff.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CertbotefforgPackage = typeof certbotefforgPackage
