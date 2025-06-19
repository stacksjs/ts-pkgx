/**
 * **smi** - Library to Access SMI MIB Information
 *
 * @domain `ibr.cs.tu-bs.de/libsmi`
 * @programs `smidiff`, `smidump`, `smilint`, `smiquery`, `smixlate`
 * @version `0.4.8` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +ibr.cs.tu-bs.de/libsmi -- $SHELL -i`
 * @aliases `smi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.smi
 * // Or access via domain
 * const samePkg = pantry.ibrcstubsdelibsmi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libsmi"
 * console.log(pkg.description) // "Library to Access SMI MIB Information"
 * console.log(pkg.programs)    // ["smidiff", "smidump", ...]
 * console.log(pkg.versions[0]) // "0.4.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ibr-cs-tu-bs-de/libsmi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const smiPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsmi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ibr.cs.tu-bs.de/libsmi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Library to Access SMI MIB Information' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ibr.cs.tu-bs.de/libsmi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +ibr.cs.tu-bs.de/libsmi -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'smidiff',
    'smidump',
    'smilint',
    'smiquery',
    'smixlate',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'smi',
  ] as const,
}

export type SmiPackage = typeof smiPackage
