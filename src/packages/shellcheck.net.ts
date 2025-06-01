/**
 * **shellcheck** - Crafters of fine Open Source products
 *
 * @domain `shellcheck.net`
 *
 * @install `pkgx shellcheck.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.shellchecknet
 * console.log(pkg.name)        // "shellcheck"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/shellcheck-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const shellchecknetPackage = {
  /**
   * The display name of this package.
   */
  name: 'shellcheck' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/shellcheck.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'shellcheck.net' as const,
  fullPath: 'shellcheck.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx shellcheck.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ShellchecknetPackage = typeof shellchecknetPackage
