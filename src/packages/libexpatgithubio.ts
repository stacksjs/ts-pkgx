/**
 * **libexpat.github.io** - Package from pantry: libexpat.github.io
 *
 * @domain `libexpat.github.io`
 *
 * @install `launchpad install libexpat.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libexpatgithubio
 * console.log(pkg.name)        // "libexpat.github.io"
 * console.log(pkg.description) // "Package from pantry: libexpat.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libexpat-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libexpatgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libexpat.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libexpat.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libexpat.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install libexpat.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libexpat.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibexpatgithubioPackage = typeof libexpatgithubioPackage
