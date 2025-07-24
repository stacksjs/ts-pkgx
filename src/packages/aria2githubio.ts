/**
 * **aria2.github.io** - Package from pantry: aria2.github.io
 *
 * @domain `aria2.github.io`
 *
 * @install `launchpad install aria2.github.io`
 * @dependencies `zlib.net^1`, `openssl.org^1`, `libexpat.github.io`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.aria2githubio
 * console.log(pkg.name)        // "aria2.github.io"
 * console.log(pkg.description) // "Package from pantry: aria2.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aria2-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aria2githubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'aria2.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aria2.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: aria2.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aria2.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +aria2.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aria2.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'openssl.org^1',
    'libexpat.github.io',
    'sqlite.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aria2.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Aria2githubioPackage = typeof aria2githubioPackage
