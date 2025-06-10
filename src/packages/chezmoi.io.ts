/**
 * **chezmoi** - Manage your dotfiles across multiple diverse machines, securely.
 *
 * @domain `chezmoi.io`
 * @programs `chezmoi`
 * @version `2.62.6` (76 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/chezmoi-io.md
 *
 * @install `sh <(curl https://pkgx.sh) chezmoi`
 * @name `chezmoi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.chezmoi
 * // Or access via domain
 * const samePkg = pantry.chezmoiio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "chezmoi"
 * console.log(pkg.description) // "Manage your dotfiles across multiple diverse ma..."
 * console.log(pkg.programs)    // ["chezmoi"]
 * console.log(pkg.versions[0]) // "2.62.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chezmoi-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chezmoiPackage = {
  /**
   * The display name of this package.
   */
  name: 'chezmoi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chezmoi.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Manage your dotfiles across multiple diverse machines, securely.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/chezmoi.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) chezmoi' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'chezmoi',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.62.6',
    '2.62.5',
    '2.62.4',
    '2.62.3',
    '2.62.2',
    '2.62.1',
    '2.62.0',
    '2.61.0',
    '2.60.1',
    '2.60.0',
    '2.59.1',
    '2.59.0',
    '2.58.0',
    '2.57.0',
    '2.56.0',
    '2.55.0',
    '2.54.0',
    '2.53.1',
    '2.53.0',
    '2.52.4',
    '2.52.3',
    '2.52.2',
    '2.52.1',
    '2.52.0',
    '2.51.0',
    '2.50.0',
    '2.49.1',
    '2.49.0',
    '2.48.2',
    '2.48.1',
    '2.48.0',
    '2.47.4',
    '2.47.3',
    '2.47.2',
    '2.47.1',
    '2.47.0',
    '2.46.1',
    '2.46.0',
    '2.45.0',
    '2.44.0',
    '2.43.0',
    '2.42.3',
    '2.42.2',
    '2.42.1',
    '2.42.0',
    '2.41.0',
    '2.40.4',
    '2.40.3',
    '2.40.2',
    '2.40.1',
    '2.40.0',
    '2.39.1',
    '2.39.0',
    '2.36.1',
    '2.36.0',
    '2.35.2',
    '2.35.1',
    '2.35.0',
    '2.34.3',
    '2.34.2',
    '2.34.1',
    '2.34.0',
    '2.33.6',
    '2.33.5',
    '2.33.4',
    '2.33.3',
    '2.33.2',
    '2.33.1',
    '2.33.0',
    '2.32.0',
    '2.31.1',
    '2.31.0',
    '2.30.1',
    '2.30.0',
    '2.29.4',
    '2.29.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'chezmoi.io' as const,
}

export type ChezmoiPackage = typeof chezmoiPackage
