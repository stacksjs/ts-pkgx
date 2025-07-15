/**
 * **eigen.tuxfamily.org** - Package from pantry: eigen.tuxfamily.org
 *
 * @domain `eigen.tuxfamily.org`
 *
 * @install `launchpad install eigen.tuxfamily.org`
 * @dependencies `linux:gnu.org/gcc/libstdcxx@14` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.eigentuxfamilyorg
 * console.log(pkg.name)        // "eigen.tuxfamily.org"
 * console.log(pkg.description) // "Package from pantry: eigen.tuxfamily.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/eigen-tuxfamily-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eigentuxfamilyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'eigen.tuxfamily.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'eigen.tuxfamily.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: eigen.tuxfamily.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install eigen.tuxfamily.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +eigen.tuxfamily.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install eigen.tuxfamily.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/eigen.tuxfamily.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type EigentuxfamilyorgPackage = typeof eigentuxfamilyorgPackage
