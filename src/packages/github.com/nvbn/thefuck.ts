/**
 * **thefuck** - Magnificent app which corrects your previous console command.
 *
 * @domain `github.com/nvbn/thefuck`
 * @programs `thefuck`
 * @version `3.32.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install thefuck`
 * @name `thefuck`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.thefuck
 * // Or access via domain
 * const samePkg = pantry.githubcomnvbnthefuck
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "thefuck"
 * console.log(pkg.description) // "Magnificent app which corrects your previous co..."
 * console.log(pkg.programs)    // ["thefuck"]
 * console.log(pkg.versions[0]) // "3.32.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nvbn/thefuck.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thefuckPackage = {
  /**
   * The display name of this package.
   */
  name: 'thefuck' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nvbn/thefuck' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Magnificent app which corrects your previous console command.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nvbn/thefuck/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install thefuck' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'thefuck',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.32.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) thefuck -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install thefuck' as const,
}

export type ThefuckPackage = typeof thefuckPackage
