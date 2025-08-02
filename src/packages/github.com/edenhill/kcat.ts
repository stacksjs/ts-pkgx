/**
 * **kcat** - Package from pantry: github.com/edenhill/kcat
 *
 * @domain `github.com/edenhill/kcat`
 *
 * @install `launchpad install github.com/edenhill/kcat`
 * @dependencies `apache.org/avro`, `github.com/confluentinc/librdkafka`, `github.com/confluentinc/libserdes`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomedenhillkcat
 * console.log(pkg.name)        // "kcat"
 * console.log(pkg.description) // "Package from pantry: github.com/edenhill/kcat"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/edenhill/kcat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomedenhillkcatPackage = {
  /**
   * The display name of this package.
   */
  name: 'kcat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/edenhill/kcat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/edenhill/kcat' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/edenhill/kcat' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/edenhill/kcat -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/edenhill/kcat' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'apache.org/avro',
    'github.com/confluentinc/librdkafka',
    'github.com/confluentinc/libserdes',
    'lloyd.github.io/yajl',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/edenhill/kcat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomedenhillkcatPackage = typeof githubcomedenhillkcatPackage
