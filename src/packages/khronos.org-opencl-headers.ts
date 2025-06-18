/**
 * **opencl-headers** - Khronos OpenCL-Headers
 *
 * @domain `khronos.org/opencl-headers`
 * @version `2024.10.24` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/opencl-headers.md
 *
 * @install `sh <(curl https://pkgx.sh) +khronos.org/opencl-headers -- $SHELL -i`
 * @aliases `opencl-headers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.openclheaders
 * // Or access via domain
 * const samePkg = pantry.khronosorgopenclheaders
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "khronos.org/opencl-headers"
 * console.log(pkg.description) // "Khronos OpenCL-Headers"
 * console.log(pkg.versions[0]) // "2024.10.24" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/opencl-headers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openclheadersPackage = {
  /**
   * The display name of this package.
   */
  name: 'khronos.org/opencl-headers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khronos.org/opencl-headers' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Khronos OpenCL-Headers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/khronos.org/opencl-headers/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +khronos.org/opencl-headers -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2024.10.24',
    '2024.5.8',
    '2023.12.14',
    '2023.4.17',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'opencl-headers',
  ] as const,
  fullPath: 'khronos.org/opencl-headers' as const,
}

export type OpenclheadersPackage = typeof openclheadersPackage
