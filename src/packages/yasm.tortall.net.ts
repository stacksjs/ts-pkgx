/**
 * **yasm** - Crafters of fine Open Source products
 *
 * @domain `yasm.tortall.net`
 *
 * @install `pkgx yasm.tortall.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.yasmtortallnet
 * console.log(pkg.name)        // "yasm"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yasm-tortall-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yasmtortallnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'yasm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/yasm.tortall.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yasm.tortall.net' as const,
  fullPath: 'yasm.tortall.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx yasm.tortall.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type YasmtortallnetPackage = typeof yasmtortallnetPackage
