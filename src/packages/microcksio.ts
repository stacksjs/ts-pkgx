/**
 * **microcks.io** - Package from pantry: microcks.io
 *
 * @domain `microcks.io`
 *
 * @install `launchpad install microcks.io`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microcksio
 * console.log(pkg.name)        // "microcks.io"
 * console.log(pkg.description) // "Package from pantry: microcks.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microcks-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microcksioPackage = {
  /**
   * The display name of this package.
   */
  name: 'microcks.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microcks.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: microcks.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install microcks.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +microcks.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install microcks.io' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microcks.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MicrocksioPackage = typeof microcksioPackage
