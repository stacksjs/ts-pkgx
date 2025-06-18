/**
 * **snappy** - A fast compressor/decompressor
 *
 * @domain `google.github.io/snappy`
 * @version `1.2.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +google.github.io/snappy -- $SHELL -i`
 * @dependencies `freedesktop.org/pkg-config`, `cmake.org`, `gnu.org/patch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlegithubiosnappy
 * console.log(pkg.name)        // "snappy"
 * console.log(pkg.description) // "A fast compressor/decompressor"
 * console.log(pkg.versions[0]) // "1.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-github-io/snappy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlegithubiosnappyPackage = {
  /**
   * The display name of this package.
   */
  name: 'snappy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.github.io/snappy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A fast compressor/decompressor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.github.io/snappy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +google.github.io/snappy -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/pkg-config',
    'cmake.org',
    'gnu.org/patch',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.10',
  ] as const,
  aliases: [] as const,
}

export type GooglegithubiosnappyPackage = typeof googlegithubiosnappyPackage
