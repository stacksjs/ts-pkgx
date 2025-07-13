/**
 * **libpng.org** - Package from pantry: libpng.org
 *
 * @domain `libpng.org`
 *
 * @install `launchpad install libpng.org`
 * @dependencies `zlib.net@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libpngorg
 * console.log(pkg.name)        // "libpng.org"
 * console.log(pkg.description) // "Package from pantry: libpng.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libpng-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libpngorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libpng.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libpng.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libpng.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libpng.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libpng.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libpng.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libpng.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibpngorgPackage = typeof libpngorgPackage
