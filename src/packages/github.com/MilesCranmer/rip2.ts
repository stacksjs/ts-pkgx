/**
 * **rip2** - Package from pantry: github.com/MilesCranmer/rip2
 *
 * @domain `github.com/MilesCranmer/rip2`
 *
 * @install `launchpad install github.com/MilesCranmer/rip2`
 * @dependencies `rust-lang.org>=1.75`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommilescranmerrip2
 * console.log(pkg.name)        // "rip2"
 * console.log(pkg.description) // "Package from pantry: github.com/MilesCranmer/rip2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/MilesCranmer/rip2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommilescranmerrip2Package = {
  /**
   * The display name of this package.
   */
  name: 'rip2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/MilesCranmer/rip2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/MilesCranmer/rip2' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/MilesCranmer/rip2' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.75',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/MilesCranmer/rip2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcommilescranmerrip2Package = typeof githubcommilescranmerrip2Package
