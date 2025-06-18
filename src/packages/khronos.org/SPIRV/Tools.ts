/**
 * **khronos.org/SPIRV-Tools** - pkgx package
 *
 * @domain `khronos.org/SPIRV/Tools`
 *
 * @install `pkgx khronos.org/SPIRV-Tools`
 * @name `SPIRV-Tools`
 * @aliases `khronos.org/SPIRV-Tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.khronosorgSPIRVTools
 * // Or access via domain
 * const samePkg = pantry.khronosorgspirvtools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "SPIRV-Tools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/SPIRV/Tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const khronosorgSPIRVToolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'SPIRV-Tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khronos.org/SPIRV/Tools' as const,
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
  installCommand: 'pkgx khronos.org/SPIRV-Tools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'khronos.org/SPIRV-Tools',
  ] as const,
  fullPath: 'khronos.org/SPIRV-Tools' as const,
}

export type KhronosorgSPIRVToolsPackage = typeof khronosorgSPIRVToolsPackage
