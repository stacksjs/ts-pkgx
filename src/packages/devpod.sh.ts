/**
 * **devpod.sh** - Go home.
 *
 * @domain `devpod.sh`
 *
 * @install `pkgx devpod.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.devpodsh
 * console.log(pkg.name)        // "devpod.sh"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/devpod-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const devpodshPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/devpod.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'devpod.sh' as const,
  fullPath: 'devpod.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx devpod.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DevpodshPackage = typeof devpodshPackage
