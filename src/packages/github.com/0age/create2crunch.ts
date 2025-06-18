/**
 * **create2crunch** - Package from pantry: github.com/0age/create2crunch
 *
 * @domain `github.com/0age/create2crunch`
 *
 * @install `launchpad install github.com/0age/create2crunch`
 * @dependencies `rust-lang.org>=1.56`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcom0agecreate2crunch
 * console.log(pkg.name)        // "create2crunch"
 * console.log(pkg.description) // "Package from pantry: github.com/0age/create2crunch"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/0age/create2crunch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcom0agecreate2crunchPackage = {
  /**
   * The display name of this package.
   */
  name: 'create2crunch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/0age/create2crunch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/0age/create2crunch' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/0age/create2crunch' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.56',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/0age/create2crunch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcom0agecreate2crunchPackage = typeof githubcom0agecreate2crunchPackage
