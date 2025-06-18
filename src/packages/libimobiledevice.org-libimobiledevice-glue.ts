/**
 * **libimobiledevice-glue** - A library with common code used by libraries and tools around the libimobiledevice project
 *
 * @domain `libimobiledevice.org/libimobiledevice-glue`
 * @version `1.3.2` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org/libimobiledevice-glue.md
 *
 * @install `sh <(curl https://pkgx.sh) +libimobiledevice.org/libimobiledevice-glue -- $SHELL -i`
 * @aliases `libimobiledevice-glue`
 * @dependencies `libimobiledevice.org/libplist^2.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libimobiledeviceglue
 * // Or access via domain
 * const samePkg = pantry.libimobiledeviceorglibimobiledeviceglue
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libimobiledevice.org/libimobiledevice-glue"
 * console.log(pkg.description) // "A library with common code used by libraries an..."
 * console.log(pkg.versions[0]) // "1.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org/libimobiledevice-glue.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libimobiledevicegluePackage = {
  /**
   * The display name of this package.
   */
  name: 'libimobiledevice.org/libimobiledevice-glue' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libimobiledevice.org/libimobiledevice-glue' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A library with common code used by libraries and tools around the libimobiledevice project' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/libimobiledevice-glue/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libimobiledevice.org/libimobiledevice-glue -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libimobiledevice.org/libplist^2.4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libimobiledevice-glue',
  ] as const,
  fullPath: 'libimobiledevice.org/libimobiledevice-glue' as const,
}

export type LibimobiledevicegluePackage = typeof libimobiledevicegluePackage
