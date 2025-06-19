/**
 * **term-size** - Get the terminal window size on macOS
 *
 * @domain `github.com/sindresorhus/macos-term-size`
 * @programs `term-size`
 * @version `1.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install term-size`
 * @aliases `term-size`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.termsize
 * // Or access via domain
 * const samePkg = pantry.githubcomsindresorhusmacostermsize
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "macos-term-size"
 * console.log(pkg.description) // "Get the terminal window size on macOS"
 * console.log(pkg.programs)    // ["term-size"]
 * console.log(pkg.versions[0]) // "1.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sindresorhus/macos-term-size.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const termsizePackage = {
  /**
   * The display name of this package.
   */
  name: 'macos-term-size' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sindresorhus/macos-term-size' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Get the terminal window size on macOS' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sindresorhus/macos-term-size/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install term-size' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'term-size',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'term-size',
  ] as const,
}

export type TermsizePackage = typeof termsizePackage
