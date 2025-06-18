/**
 * **liburcu.org** - Package from pantry: liburcu.org
 *
 * @domain `liburcu.org`
 *
 * @install `launchpad install liburcu.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.liburcuorg
 * console.log(pkg.name)        // "liburcu.org"
 * console.log(pkg.description) // "Package from pantry: liburcu.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/liburcu-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liburcuorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'liburcu.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'liburcu.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: liburcu.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install liburcu.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/liburcu.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LiburcuorgPackage = typeof liburcuorgPackage
