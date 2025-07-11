/**
 * **speexdec** - Audio codec designed for speech
 *
 * @domain `speex.org`
 * @programs `speexdec`
 * @version `1.2.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install speexdec`
 * @name `speexdec`
 * @dependencies `xiph.org/ogg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.speexdec
 * // Or access via domain
 * const samePkg = pantry.speexorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "speexdec"
 * console.log(pkg.description) // "Audio codec designed for speech"
 * console.log(pkg.programs)    // ["speexdec"]
 * console.log(pkg.versions[0]) // "1.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/speex-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const speexdecPackage = {
  /**
   * The display name of this package.
   */
  name: 'speexdec' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'speex.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Audio codec designed for speech' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/speex.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install speexdec' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'speexdec',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/ogg',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) speexdec -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install speexdec' as const,
}

export type SpeexdecPackage = typeof speexdecPackage
