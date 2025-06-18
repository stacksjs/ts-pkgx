/**
 * **bash** - Bourne-Again SHell, a UNIX command interpreter
 *
 * @domain `gnu.org/bash`
 * @programs `bash`, `bashbug`
 * @version `5.2.37` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/bash.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/bash -- $SHELL -i`
 * @name `bash`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bash
 * // Or access via domain
 * const samePkg = pantry.gnuorgbash
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bash"
 * console.log(pkg.description) // "Bourne-Again SHell, a UNIX command interpreter"
 * console.log(pkg.programs)    // ["bash", "bashbug"]
 * console.log(pkg.versions[0]) // "5.2.37" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/bash.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bashPackage = {
  /**
   * The display name of this package.
   */
  name: 'bash' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/bash' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Bourne-Again SHell, a UNIX command interpreter' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bash/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/bash -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bash',
    'bashbug',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.2.37',
    '5.2.32',
    '5.2.21',
    '5.2.15',
    '5.1.16',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gnu.org/bash' as const,
}

export type BashPackage = typeof bashPackage
