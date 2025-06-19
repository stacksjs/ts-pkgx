/**
 * **lazygit** - simple terminal UI for git commands
 *
 * @domain `github.com/jesseduffield/lazygit`
 * @programs `lazygit`
 * @version `0.52.0` (27 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lazygit`
 * @name `lazygit`
 * @dependencies `git-scm.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lazygit
 * // Or access via domain
 * const samePkg = pantry.githubcomjesseduffieldlazygit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lazygit"
 * console.log(pkg.description) // "simple terminal UI for git commands"
 * console.log(pkg.programs)    // ["lazygit"]
 * console.log(pkg.versions[0]) // "0.52.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jesseduffield/lazygit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lazygitPackage = {
  /**
   * The display name of this package.
   */
  name: 'lazygit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jesseduffield/lazygit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'simple terminal UI for git commands' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jesseduffield/lazygit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install lazygit' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lazygit',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.52.0',
    '0.51.1',
    '0.51.0',
    '0.50.0',
    '0.49.0',
    '0.48.0',
    '0.47.2',
    '0.47.1',
    '0.46.0',
    '0.45.2',
    '0.45.0',
    '0.44.1',
    '0.44.0',
    '0.43.1',
    '0.43.0',
    '0.42.0',
    '0.41.0',
    '0.40.2',
    '0.40.0',
    '0.39.4',
    '0.39.3',
    '0.39.2',
    '0.39.1',
    '0.38.2',
    '0.38.1',
    '0.38.0',
    '0.37.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LazygitPackage = typeof lazygitPackage
