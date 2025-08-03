/**
 * **pluralith.com** - Package from pantry: pluralith.com
 *
 * @domain `pluralith.com`
 *
 * @install `launchpad install pluralith.com`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pluralithcom
 * console.log(pkg.name)        // "pluralith.com"
 * console.log(pkg.description) // "Package from pantry: pluralith.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pluralith-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pluralithcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'pluralith.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pluralith.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pluralith.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pluralith.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pluralith.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pluralith.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pluralith.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PluralithcomPackage = typeof pluralithcomPackage
