/**
 * **khronos.org/SPIRV-Cross** - pkgx package
 *
 * @domain `khronos.org/SPIRV/Cross`
 *
 * @install `pkgx khronos.org/SPIRV-Cross`
 * @name `SPIRV-Cross`
 * @aliases `khronos.org/SPIRV-Cross`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.khronosorgSPIRVCross
 * // Or access via domain
 * const samePkg = pantry.khronosorgspirvcross
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "SPIRV-Cross"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/SPIRV/Cross.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const khronosorgSPIRVCrossPackage = {
  /**
   * The display name of this package.
   */
  name: 'SPIRV-Cross' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khronos.org/SPIRV/Cross' as const,
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
  installCommand: 'pkgx khronos.org/SPIRV-Cross' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'khronos.org/SPIRV-Cross',
  ] as const,
  fullPath: 'khronos.org/SPIRV-Cross' as const,
}

export type KhronosorgSPIRVCrossPackage = typeof khronosorgSPIRVCrossPackage
