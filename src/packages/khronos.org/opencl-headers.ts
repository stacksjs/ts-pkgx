/**
 * **opencl-headers** - Khronos OpenCL-Headers
 *
 * @domain `khronos.org/opencl-headers`
 * @version `2024.10.24` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +khronos.org/opencl-headers -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.khronosorgopenclheaders
 * console.log(pkg.name)        // "opencl-headers"
 * console.log(pkg.description) // "Khronos OpenCL-Headers"
 * console.log(pkg.versions[0]) // "2024.10.24" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/opencl-headers.md
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
  installCommand: 'launchpad install +khronos.org/opencl-headers -- $SHELL -i' as const,
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
  aliases: [] as const,
}

export type KhronosorgopenclheadersPackage = typeof khronosorgopenclheadersPackage
