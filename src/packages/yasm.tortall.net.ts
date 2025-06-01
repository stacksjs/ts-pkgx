/**
 * **yasm** - Yasm Assembler mainline development tree
 *
 * @domain `yasm.tortall.net`
 * @programs `yasm`
 * @version `1.3.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/yasm-tortall-net.md
 *
 * @install `sh <(curl https://pkgx.sh) yasm`
 * @aliases `yasm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.yasm
 * // Or access via domain
 * const samePkg = pantry.yasmtortallnet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yasm"
 * console.log(pkg.description) // "Yasm Assembler mainline development tree"
 * console.log(pkg.programs)    // ["yasm"]
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yasm-tortall-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yasmPackage = {
  /**
   * The display name of this package.
   */
  name: 'yasm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yasm.tortall.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Yasm Assembler mainline development tree' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yasm.tortall.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) yasm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yasm',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'yasm',
  ] as const,
  fullPath: 'yasm.tortall.net' as const,
}

export type YasmPackage = typeof yasmPackage
