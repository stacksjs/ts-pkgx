/**
 * **+fmt.dev -- $SHELL -i** - A modern formatting library
 *
 * @domain `fmt.dev`
 * @version `11.2.0` (15 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/fmt-dev.md
 *
 * @install `sh <(curl https://pkgx.sh) +fmt.dev -- $SHELL -i`
 * @aliases `+fmt.dev -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.fmtdevSHELLi
 * // Or access via domain
 * const samePkg = pantry.fmtdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fmt.dev"
 * console.log(pkg.description) // "A modern formatting library"
 * console.log(pkg.versions[0]) // "11.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fmt-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fmtdevSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'fmt.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fmt.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A modern formatting library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fmt.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +fmt.dev -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '11.2.0',
    '11.1.4',
    '11.1.3',
    '11.1.2',
    '11.1.1',
    '11.1.0',
    '11.0.2',
    '11.0.1',
    '11.0.0',
    '10.2.1',
    '10.2.0',
    '10.1.1',
    '10.1.0',
    '10.0.0',
    '9.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+fmt.dev -- $SHELL -i',
  ] as const,
  fullPath: 'fmt.dev' as const,
}

export type FmtdevSHELLiPackage = typeof fmtdevSHELLiPackage
