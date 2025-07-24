/**
 * **auto-gpt** - AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters.
 *
 * @domain `agpt.co`
 * @programs `auto-gpt`
 * @version `0.4.7` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install auto-gpt`
 * @name `auto-gpt`
 * @dependencies `python.org>=3.10<3.12`, `redis.io^7`, `tea.xyz^0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.autogpt
 * // Or access via domain
 * const samePkg = pantry.agptco
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "auto-gpt"
 * console.log(pkg.description) // "AutoGPT is the vision of accessible AI for ever..."
 * console.log(pkg.programs)    // ["auto-gpt"]
 * console.log(pkg.versions[0]) // "0.4.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/agpt-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const autogptPackage = {
  /**
   * The display name of this package.
   */
  name: 'auto-gpt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'agpt.co' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/agpt.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install auto-gpt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'auto-gpt',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.10<3.12',
    'redis.io^7',
    'tea.xyz^0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.7',
    '0.4.6',
    '0.4.5',
    '0.4.4',
    '0.4.3',
    '0.4.2',
    '0.4.0',
    '0.3.1',
    '0.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) auto-gpt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install auto-gpt' as const,
}

export type AutogptPackage = typeof autogptPackage
