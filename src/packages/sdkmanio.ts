/**
 * **sdkman-init.sh** - The SDKMAN! Command Line Interface
 *
 * @domain `sdkman.io`
 * @programs `sdkman-init.sh`
 * @version `5.19.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sdkman-init.sh`
 * @aliases `sdkman-init.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sdkmaninitsh
 * // Or access via domain
 * const samePkg = pantry.sdkmanio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sdkman.io"
 * console.log(pkg.description) // "The SDKMAN! Command Line Interface"
 * console.log(pkg.programs)    // ["sdkman-init.sh"]
 * console.log(pkg.versions[0]) // "5.19.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sdkman-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sdkmaninitshPackage = {
  /**
   * The display name of this package.
   */
  name: 'sdkman.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sdkman.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The SDKMAN! Command Line Interface' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sdkman.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sdkman-init.sh' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sdkman-init.sh',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.19.0',
    '5.18.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sdkman-init.sh',
  ] as const,
}

export type SdkmaninitshPackage = typeof sdkmaninitshPackage
