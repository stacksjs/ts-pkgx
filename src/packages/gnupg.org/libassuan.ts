/**
 * **libassuan-config** - Assuan IPC Library
 *
 * @domain `gnupg.org/libassuan`
 * @programs `libassuan-config`
 * @version `3.0.2` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install libassuan-config`
 * @aliases `libassuan-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libassuanconfig
 * // Or access via domain
 * const samePkg = pantry.gnupgorglibassuan
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libassuan"
 * console.log(pkg.description) // "Assuan IPC Library"
 * console.log(pkg.programs)    // ["libassuan-config"]
 * console.log(pkg.versions[0]) // "3.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/libassuan.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libassuanconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'libassuan' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/libassuan' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Assuan IPC Library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/libassuan/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libassuan-config' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'libassuan-config',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '2.5.7',
    '2.5.6',
    '2.5.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libassuan-config',
  ] as const,
}

export type LibassuanconfigPackage = typeof libassuanconfigPackage
