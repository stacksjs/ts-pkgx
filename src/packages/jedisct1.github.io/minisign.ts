/**
 * **minisign** - A dead simple tool to sign files and verify digital signatures.
 *
 * @domain `jedisct1.github.io/minisign`
 * @programs `minisign`
 * @version `0.12.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install minisign`
 * @name `minisign`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.minisign
 * // Or access via domain
 * const samePkg = pantry.jedisct1githubiominisign
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "minisign"
 * console.log(pkg.description) // "A dead simple tool to sign files and verify dig..."
 * console.log(pkg.programs)    // ["minisign"]
 * console.log(pkg.versions[0]) // "0.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jedisct1-github-io/minisign.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const minisignPackage = {
  /**
   * The display name of this package.
   */
  name: 'minisign' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jedisct1.github.io/minisign' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A dead simple tool to sign files and verify digital signatures.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jedisct1.github.io/minisign/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install minisign' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'minisign',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.12.0',
    '0.11.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type MinisignPackage = typeof minisignPackage
