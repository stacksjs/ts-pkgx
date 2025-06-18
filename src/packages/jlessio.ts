/**
 * **jless.io** - Package from pantry: jless.io
 *
 * @domain `jless.io`
 *
 * @install `launchpad install jless.io`
 * @dependencies `x.org/xcb^1`, `rust-lang.org>=1.56`, `rust-lang.org/cargo`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jlessio
 * console.log(pkg.name)        // "jless.io"
 * console.log(pkg.description) // "Package from pantry: jless.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jless-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jlessioPackage = {
  /**
   * The display name of this package.
   */
  name: 'jless.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jless.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jless.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install jless.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xcb^1',
    'rust-lang.org>=1.56',
    'rust-lang.org/cargo',
    'python.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jless.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JlessioPackage = typeof jlessioPackage
