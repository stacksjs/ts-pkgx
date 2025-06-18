/**
 * **libimobiledevice.org/libimobiledevice-glue** - pkgx package
 *
 * @domain `libimobiledevice.org/libimobiledevice/glue`
 *
 * @install `pkgx libimobiledevice.org/libimobiledevice-glue`
 * @name `libimobiledevice-glue`
 * @aliases `libimobiledevice.org/libimobiledevice-glue`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libimobiledeviceorglibimobiledeviceglue
 * // Or access via domain
 * const samePkg = pantry.libimobiledeviceorglibimobiledeviceglue
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libimobiledevice-glue"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org/libimobiledevice/glue.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libimobiledeviceorglibimobiledevicegluePackage = {
  /**
   * The display name of this package.
   */
  name: 'libimobiledevice-glue' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libimobiledevice.org/libimobiledevice/glue' as const,
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
  installCommand: 'pkgx libimobiledevice.org/libimobiledevice-glue' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libimobiledevice.org/libimobiledevice-glue',
  ] as const,
  fullPath: 'libimobiledevice.org/libimobiledevice-glue' as const,
}

export type LibimobiledeviceorglibimobiledevicegluePackage = typeof libimobiledeviceorglibimobiledevicegluePackage
