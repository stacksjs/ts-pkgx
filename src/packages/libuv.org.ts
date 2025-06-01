/**
 * **+libuv.org -- $SHELL -i** - Cross-platform asynchronous I/O
 *
 * @domain `libuv.org`
 * @version `1.51.0` (10 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/libuv-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +libuv.org -- $SHELL -i`
 * @aliases `+libuv.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libuvorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.libuvorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libuv.org"
 * console.log(pkg.description) // "Cross-platform asynchronous I/O"
 * console.log(pkg.versions[0]) // "1.51.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libuv-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libuvorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'libuv.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libuv.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Cross-platform asynchronous I/O' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libuv.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libuv.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.51.0',
    '1.50.0',
    '1.49.2',
    '1.49.1',
    '1.49.0',
    '1.48.0',
    '1.47.0',
    '1.46.0',
    '1.45.0',
    '1.44.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+libuv.org -- $SHELL -i',
  ] as const,
  fullPath: 'libuv.org' as const,
}

export type LibuvorgSHELLiPackage = typeof libuvorgSHELLiPackage
