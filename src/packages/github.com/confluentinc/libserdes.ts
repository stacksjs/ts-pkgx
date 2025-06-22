/**
 * **libserdes** - Package from pantry: github.com/confluentinc/libserdes
 *
 * @domain `github.com/confluentinc/libserdes`
 *
 * @install `launchpad install github.com/confluentinc/libserdes`
 * @dependencies `apache.org/avro`, `digip.org/jansson`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomconfluentinclibserdes
 * console.log(pkg.name)        // "libserdes"
 * console.log(pkg.description) // "Package from pantry: github.com/confluentinc/li..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/confluentinc/libserdes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomconfluentinclibserdesPackage = {
  /**
   * The display name of this package.
   */
  name: 'libserdes' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/confluentinc/libserdes' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/confluentinc/libserdes' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/confluentinc/libserdes' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/confluentinc/libserdes -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/confluentinc/libserdes' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'apache.org/avro',
    'digip.org/jansson',
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/confluentinc/libserdes/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomconfluentinclibserdesPackage = typeof githubcomconfluentinclibserdesPackage
