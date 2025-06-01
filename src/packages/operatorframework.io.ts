/**
 * **operatorframework.io** - Go home.
 *
 * @domain `operatorframework.io`
 *
 * @install `pkgx operatorframework.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.operatorframeworkio
 * console.log(pkg.name)        // "operatorframework.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/operatorframework-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const operatorframeworkioPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/operatorframework.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'operatorframework.io' as const,
  fullPath: 'operatorframework.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx operatorframework.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OperatorframeworkioPackage = typeof operatorframeworkioPackage
