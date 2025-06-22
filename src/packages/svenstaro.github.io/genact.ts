/**
 * **genact** - 🌀 A nonsense activity generator
 *
 * @domain `svenstaro.github.io/genact`
 * @programs `genact`
 * @version `1.4.2` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install genact`
 * @name `genact`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.genact
 * // Or access via domain
 * const samePkg = pantry.svenstarogithubiogenact
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "genact"
 * console.log(pkg.description) // "🌀 A nonsense activity generator"
 * console.log(pkg.programs)    // ["genact"]
 * console.log(pkg.versions[0]) // "1.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/svenstaro-github-io/genact.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const genactPackage = {
  /**
   * The display name of this package.
   */
  name: 'genact' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'svenstaro.github.io/genact' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🌀 A nonsense activity generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/svenstaro.github.io/genact/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install genact' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'genact',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.2',
    '1.4.1',
    '1.4.0',
    '1.3.0',
    '1.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) genact -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install genact' as const,
}

export type GenactPackage = typeof genactPackage
