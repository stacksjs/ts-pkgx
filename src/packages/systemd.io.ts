/**
 * **systemd.io** - Crafters of fine Open Source products
 *
 * @domain `systemd.io`
 *
 * @install `pkgx systemd.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.systemdio
 * console.log(pkg.name)        // "systemd.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/systemd-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const systemdioPackage = {
  /**
   * The display name of this package.
   */
  name: 'systemd.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/systemd.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'systemd.io' as const,
  fullPath: 'systemd.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx systemd.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SystemdioPackage = typeof systemdioPackage
