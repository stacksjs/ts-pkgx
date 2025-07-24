/**
 * **certbot.eff.org** - Package from pantry: certbot.eff.org
 *
 * @domain `certbot.eff.org`
 *
 * @install `launchpad install certbot.eff.org`
 * @dependencies `python.org~3.11`
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install certbot.eff.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +certbot.eff.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install certbot.eff.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/certbot.eff.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CertbotefforgPackage = typeof certbotefforgPackage
