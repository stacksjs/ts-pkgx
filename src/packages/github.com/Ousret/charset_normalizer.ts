/**
 * **charset_normalizer** - Package from pantry: github.com/Ousret/charset_normalizer
 *
 * @domain `github.com/Ousret/charset_normalizer`
 *
 * @install `launchpad install github.com/Ousret/charset_normalizer`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomousretcharset_normalizer
 * console.log(pkg.name)        // "charset_normalizer"
 * console.log(pkg.description) // "Package from pantry: github.com/Ousret/charset_..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Ousret/charset_normalizer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomousretcharset_normalizerPackage = {
  /**
   * The display name of this package.
   */
  name: 'charset_normalizer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Ousret/charset_normalizer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Ousret/charset_normalizer' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Ousret/charset_normalizer' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Ousret/charset_normalizer -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Ousret/charset_normalizer' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Ousret/charset_normalizer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomousretcharset_normalizerPackage = typeof githubcomousretcharset_normalizerPackage
