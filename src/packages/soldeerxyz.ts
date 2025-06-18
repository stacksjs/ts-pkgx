/**
 * **soldeer.xyz** - Package from pantry: soldeer.xyz
 *
 * @domain `soldeer.xyz`
 *
 * @install `launchpad install soldeer.xyz`
 * @dependencies `rust-lang.org>=1.74`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.soldeerxyz
 * console.log(pkg.name)        // "soldeer.xyz"
 * console.log(pkg.description) // "Package from pantry: soldeer.xyz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/soldeer-xyz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const soldeerxyzPackage = {
  /**
   * The display name of this package.
   */
  name: 'soldeer.xyz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'soldeer.xyz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: soldeer.xyz' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install soldeer.xyz' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.74',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/soldeer.xyz/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SoldeerxyzPackage = typeof soldeerxyzPackage
