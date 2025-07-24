/**
 * **fzf** - :cherry_blossom: A command-line fuzzy finder
 *
 * @domain `github.com/junegunn/fzf`
 * @programs `fzf`
 * @version `0.64.0` (47 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install fzf`
 * @name `fzf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fzf
 * // Or access via domain
 * const samePkg = pantry.githubcomjunegunnfzf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fzf"
 * console.log(pkg.description) // ":cherry_blossom: A command-line fuzzy finder"
 * console.log(pkg.programs)    // ["fzf"]
 * console.log(pkg.versions[0]) // "0.64.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/junegunn/fzf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fzfPackage = {
  /**
   * The display name of this package.
   */
  name: 'fzf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/junegunn/fzf' as const,
  /**
   * Brief description of what this package does.
   */
  description: ':cherry_blossom: A command-line fuzzy finder' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/junegunn/fzf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fzf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fzf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.64.0',
    '0.63.0',
    '0.62.0',
    '0.61.3',
    '0.61.2',
    '0.61.1',
    '0.61.0',
    '0.60.3',
    '0.60.2',
    '0.60.1',
    '0.60.0',
    '0.59.0',
    '0.58.0',
    '0.57.0',
    '0.56.3',
    '0.56.2',
    '0.56.1',
    '0.56.0',
    '0.55.0',
    '0.54.3',
    '0.54.2',
    '0.54.1',
    '0.54.0',
    '0.53.0',
    '0.52.1',
    '0.52.0',
    '0.51.0',
    '0.50.0',
    '0.49.0',
    '0.48.1',
    '0.48.0',
    '0.47.0',
    '0.46.1',
    '0.46.0',
    '0.45.0',
    '0.44.1',
    '0.44.0',
    '0.43.0',
    '0.42.0',
    '0.41.1',
    '0.41.0',
    '0.40.0',
    '0.39.0',
    '0.38.0',
    '0.37.0',
    '0.36.0',
    '0.35.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) fzf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fzf' as const,
}

export type FzfPackage = typeof fzfPackage
