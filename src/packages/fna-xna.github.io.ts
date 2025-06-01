/**
 * **+fna-xna.github.io -- $SHELL -i** - FAudio - Accuracy-focused XAudio reimplementation for open platforms
 *
 * @domain `fna-xna.github.io`
 * @version `25.5.0` (17 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/fna-xna-github-io.md
 *
 * @install `sh <(curl https://pkgx.sh) +fna-xna.github.io -- $SHELL -i`
 * @aliases `+fna-xna.github.io -- $SHELL -i`
 * @dependencies `libsdl.org^2.28`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.fnaxnagithubioSHELLi
 * // Or access via domain
 * const samePkg = pantry.fnaxnagithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fna-xna.github.io"
 * console.log(pkg.description) // "FAudio - Accuracy-focused XAudio reimplementati..."
 * console.log(pkg.versions[0]) // "25.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fna-xna-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fnaxnagithubioSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'fna-xna.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fna-xna.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'FAudio - Accuracy-focused XAudio reimplementation for open platforms' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fna-xna.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +fna-xna.github.io -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libsdl.org^2.28',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.5.0',
    '25.4.0',
    '25.3.0',
    '25.2.0',
    '25.1.0',
    '24.12.0',
    '24.11.0',
    '24.10.0',
    '24.9.0',
    '24.8.0',
    '24.7.0',
    '24.6.0',
    '24.5.0',
    '24.4.0',
    '24.3.0',
    '24.2.0',
    '24.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+fna-xna.github.io -- $SHELL -i',
  ] as const,
  fullPath: 'fna-xna.github.io' as const,
}

export type FnaxnagithubioSHELLiPackage = typeof fnaxnagithubioSHELLiPackage
