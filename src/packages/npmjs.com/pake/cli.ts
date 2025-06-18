/**
 * **npmjs.com/pake-cli** - pkgx package
 *
 * @domain `npmjs.com/pake/cli`
 *
 * @install `pkgx npmjs.com/pake-cli`
 * @name `pake-cli`
 * @aliases `npmjs.com/pake-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.npmjscompakecli
 * // Or access via domain
 * const samePkg = pantry.npmjscompakecli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pake-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/npmjs-com/pake/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const npmjscompakecliPackage = {
  /**
   * The display name of this package.
   */
  name: 'pake-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'npmjs.com/pake/cli' as const,
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
  installCommand: 'pkgx npmjs.com/pake-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'npmjs.com/pake-cli',
  ] as const,
  fullPath: 'npmjs.com/pake-cli' as const,
}

export type NpmjscompakecliPackage = typeof npmjscompakecliPackage
