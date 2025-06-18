/**
 * **khronos.org/opencl-headers** - pkgx package
 *
 * @domain `khronos.org/opencl/headers`
 *
 * @install `pkgx khronos.org/opencl-headers`
 * @name `opencl-headers`
 * @aliases `khronos.org/opencl-headers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.khronosorgopenclheaders
 * // Or access via domain
 * const samePkg = pantry.khronosorgopenclheaders
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "opencl-headers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/opencl/headers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const khronosorgopenclheadersPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencl-headers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khronos.org/opencl/headers' as const,
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
  installCommand: 'pkgx khronos.org/opencl-headers' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'khronos.org/opencl-headers',
  ] as const,
  fullPath: 'khronos.org/opencl-headers' as const,
}

export type KhronosorgopenclheadersPackage = typeof khronosorgopenclheadersPackage
