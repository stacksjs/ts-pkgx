/**
 * **ibr.cs.tu-bs.de/libsmi** - pkgx package
 *
 * @domain `ibr.cs.tu/bs.de/libsmi`
 *
 * @install `pkgx ibr.cs.tu-bs.de/libsmi`
 * @name `libsmi`
 * @aliases `ibr.cs.tu-bs.de/libsmi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ibrcstubsdelibsmi
 * // Or access via domain
 * const samePkg = pantry.ibrcstubsdelibsmi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libsmi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ibr-cs-tu/bs-de/libsmi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ibrcstubsdelibsmiPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsmi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ibr.cs.tu/bs.de/libsmi' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ibr.cs.tu-bs.de/libsmi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ibr.cs.tu-bs.de/libsmi',
  ] as const,
  fullPath: 'ibr.cs.tu-bs.de/libsmi' as const,
}

export type IbrcstubsdelibsmiPackage = typeof ibrcstubsdelibsmiPackage
