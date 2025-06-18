/**
 * **cjlin** - pkgx package
 *
 * @domain `csie.ntu.edu.tw/cjlin`
 *
 * @install `pkgx csie.ntu.edu.tw/cjlin`
 * @name `cjlin`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cjlin
 * // Or access via domain
 * const samePkg = pantry.csientuedutwcjlin
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cjlin"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/csie-ntu-edu-tw/cjlin.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cjlinPackage = {
  /**
   * The display name of this package.
   */
  name: 'cjlin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'csie.ntu.edu.tw/cjlin' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from csie.ntu.edu.tw/cjlin' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx csie.ntu.edu.tw/cjlin' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'csie.ntu.edu.tw/cjlin' as const,
}

export type CjlinPackage = typeof cjlinPackage
