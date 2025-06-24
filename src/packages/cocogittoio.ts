/**
 * **cocogitto.io** - Package from pantry: cocogitto.io
 *
 * @domain `cocogitto.io`
 *
 * @install `launchpad install cocogitto.io`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cocogittoio
 * console.log(pkg.name)        // "cocogitto.io"
 * console.log(pkg.description) // "Package from pantry: cocogitto.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cocogitto-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cocogittoioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cocogitto.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cocogitto.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cocogitto.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cocogitto.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cocogitto.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cocogitto.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cocogitto.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CocogittoioPackage = typeof cocogittoioPackage
