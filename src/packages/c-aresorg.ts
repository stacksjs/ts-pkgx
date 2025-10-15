/**
 * **c-ares** - pkgx package
 *
 * @domain `c-ares.org`
 * @version `1.34.5` (28 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install c-ares.org`
 * @dependencies `cmake.org@^3`, `curl.se`, `if@>=1.29.0<1.34.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.caresorg
 * console.log(pkg.name)        // "c-ares"
 * console.log(pkg.versions[0]) // "1.34.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/c-ares-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caresorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'c-ares' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'c-ares.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/c-ares.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install c-ares.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +c-ares.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install c-ares.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org@^3',
    'curl.se',
    'if@>=1.29.0<1.34.3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.34.5',
    '1.34.4',
    '1.34.3',
    '1.34.2',
    '1.34.1',
    '1.33.1',
    '1.33.0',
    '1.32.3',
    '1.32.2',
    '1.32.1',
    '1.32.0',
    '1.31.0',
    '1.30.0',
    '1.29.0',
    '1.28.1',
    '1.28.0',
    '1.27.0',
    '1.26.0',
    '1.25.0',
    '1.24.0',
    '1.23.0',
    '1.22.1',
    '1.22.0',
    '1.21.0',
    '1.20.1',
    '1.20.0',
    '1.19.1',
    '1.19.0',
  ] as const,
  aliases: [] as const,
}

export type CaresorgPackage = typeof caresorgPackage
