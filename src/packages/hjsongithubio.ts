/**
 * **hjson.github.io** - Package from pantry: hjson.github.io
 *
 * @domain `hjson.github.io`
 *
 * @install `launchpad install hjson.github.io`
 * @dependencies `rust-lang.org>=1.56`, `rust-lang.org/cargo`, `gnu.org/diffutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hjsongithubio
 * console.log(pkg.name)        // "hjson.github.io"
 * console.log(pkg.description) // "Package from pantry: hjson.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hjson-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hjsongithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'hjson.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hjson.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hjson.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install hjson.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.56',
    'rust-lang.org/cargo',
    'gnu.org/diffutils',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hjson.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HjsongithubioPackage = typeof hjsongithubioPackage
