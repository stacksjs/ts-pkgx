/**
 * **onefetch.dev** - Package from pantry: onefetch.dev
 *
 * @domain `onefetch.dev`
 *
 * @install `launchpad install onefetch.dev`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`, `cmake.org^3`, `rust-lang.org>=1.56`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.onefetchdev
 * console.log(pkg.name)        // "onefetch.dev"
 * console.log(pkg.description) // "Package from pantry: onefetch.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/onefetch-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const onefetchdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'onefetch.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'onefetch.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: onefetch.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install onefetch.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
    'cmake.org^3',
    'rust-lang.org>=1.56',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/onefetch.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OnefetchdevPackage = typeof onefetchdevPackage
