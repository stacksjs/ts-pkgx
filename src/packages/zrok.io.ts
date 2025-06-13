/**
 * **zrok** - Geo-scale, next-generation peer-to-peer sharing platform built on top of OpenZiti.
 *
 * @domain `zrok.io`
 * @programs `zrok`, `copyto`, `pastefrom`
 * @version `1.0.6` (38 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/zrok-io.md
 *
 * @install `sh <(curl https://pkgx.sh) +zrok.io -- $SHELL -i`
 * @name `zrok`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zrok
 * // Or access via domain
 * const samePkg = pantry.zrokio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zrok"
 * console.log(pkg.description) // "Geo-scale, next-generation peer-to-peer sharing..."
 * console.log(pkg.programs)    // ["zrok", "copyto", ...]
 * console.log(pkg.versions[0]) // "1.0.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zrok-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zrokPackage = {
  /**
   * The display name of this package.
   */
  name: 'zrok' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zrok.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Geo-scale, next-generation peer-to-peer sharing platform built on top of OpenZiti.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zrok.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +zrok.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'zrok',
    'copyto',
    'pastefrom',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.6',
    '1.0.5',
    '1.0.4',
    '1.0.3',
    '1.0.2',
    '1.0.1',
    '1.0.0',
    '0.4.49',
    '0.4.48',
    '0.4.47',
    '0.4.46',
    '0.4.45',
    '0.4.44',
    '0.4.42',
    '0.4.41',
    '0.4.40',
    '0.4.39',
    '0.4.38',
    '0.4.37',
    '0.4.36',
    '0.4.35',
    '0.4.34',
    '0.4.33',
    '0.4.32',
    '0.4.31',
    '0.4.30',
    '0.4.29',
    '0.4.27',
    '0.4.26',
    '0.4.25',
    '0.4.24',
    '0.4.23',
    '0.4.22',
    '0.4.20',
    '0.4.19',
    '0.4.18',
    '0.4.17',
    '0.4.16',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'zrok.io' as const,
}

export type ZrokPackage = typeof zrokPackage
