/**
 * **lz4.org** - Package from pantry: lz4.org
 *
 * @domain `lz4.org`
 *
 * @install `launchpad install lz4.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lz4org
 * console.log(pkg.name)        // "lz4.org"
 * console.log(pkg.description) // "Package from pantry: lz4.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lz4-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lz4orgPackage = {
  /**
   * The display name of this package.
   */
  name: 'lz4.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lz4.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: lz4.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lz4.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lz4.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lz4.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lz4.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Lz4orgPackage = typeof lz4orgPackage
