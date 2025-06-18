/**
 * **xxf86vm** - pkgx package
 *
 * @domain `x.org/xxf86vm`
 * @version `1.1.6` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/xxf86vm.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xxf86vm -- $SHELL -i`
 * @aliases `xxf86vm`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xxf86vm
 * // Or access via domain
 * const samePkg = pantry.xorgxxf86vm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xxf86vm"
 * console.log(pkg.versions[0]) // "1.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xxf86vm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xxf86vmPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xxf86vm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xxf86vm' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xxf86vm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xxf86vm -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/protocol',
    'x.org/exts',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.6',
    '1.1.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xxf86vm',
  ] as const,
  fullPath: 'x.org/xxf86vm' as const,
}

export type Xxf86vmPackage = typeof xxf86vmPackage
