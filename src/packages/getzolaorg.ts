/**
 * **getzola.org** - Package from pantry: getzola.org
 *
 * @domain `getzola.org`
 *
 * @install `launchpad install getzola.org`
 * @dependencies `rust-lang.org>=1.65`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getzolaorg
 * console.log(pkg.name)        // "getzola.org"
 * console.log(pkg.description) // "Package from pantry: getzola.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getzola-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getzolaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'getzola.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getzola.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: getzola.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install getzola.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.65',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getzola.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GetzolaorgPackage = typeof getzolaorgPackage
