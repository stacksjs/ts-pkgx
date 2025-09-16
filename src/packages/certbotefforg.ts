/**
 * **certbot.eff.org** - pkgx package
 *
 * @domain `certbot.eff.org`
 * @version `5.0.0` (21 versions available)
 * @versions From newest version to oldest.
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
 * console.log(pkg.versions[0]) // "5.0.0" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/certbot.eff.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install certbot.eff.org' as const,
  programs: [] as const,
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
    '5.0.0',
    '4.2.0',
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +certbot.eff.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install certbot.eff.org' as const,
}

export type CertbotefforgPackage = typeof certbotefforgPackage
