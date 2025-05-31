/**
 * **xray-core** - Xray, Penetrates Everything. Also the best v2ray-core, with XTLS support. Fully compatible configuration.
 *
 * @domain `xtls.github.io`
 * @programs `xray`
 * @version `25.5.16` (30 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/xtls-github-io.md
 * @install `sh <(curl https://pkgx.sh) xray`
 * @aliases `xray-core`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xraycore
 * // Or access via domain
 * const samePkg = pantry.xtlsgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xray-core"
 * console.log(pkg.description) // "Xray, Penetrates Everything. Also the best v2ra..."
 * console.log(pkg.programs)    // ["xray"]
 * console.log(pkg.versions[0]) // "25.5.16" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xtls-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xraycorePackage = {
  /**
   * The display name of this package.
   */
  name: 'xray-core' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xtls.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Xray, Penetrates Everything. Also the best v2ray-core, with XTLS support. Fully compatible configuration.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xtls.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) xray' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xray',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.5.16',
    '25.4.30',
    '25.3.6',
    '25.2.21',
    '25.1.30',
    '24.12.31',
    '24.12.18',
    '24.11.30',
    '24.11.21',
    '24.11.11',
    '24.11.5',
    '24.10.31',
    '24.9.30',
    '1.8.24',
    '1.8.23',
    '1.8.21',
    '1.8.20',
    '1.8.19',
    '1.8.18',
    '1.8.17',
    '1.8.16',
    '1.8.15',
    '1.8.13',
    '1.8.12',
    '1.8.11',
    '1.8.10',
    '1.8.9',
    '1.8.8',
    '1.8.7',
    '1.8.6',
  ] as const,
  fullPath: 'xtls.github.io' as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xray-core',
  ] as const,
}

export type XraycorePackage = typeof xraycorePackage
