/**
 * **cedarpolicy.com-cli** - Go home.
 *
 * @domain `cedarpolicy.com-cli`
 *
 * @install `pkgx cedarpolicy.com-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cedarpolicycomcli
 * console.log(pkg.name)        // "cedarpolicy.com-cli"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cedarpolicy-com-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cedarpolicycomcliPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/cedarpolicy.com-cli/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cedarpolicy.com-cli' as const,
  fullPath: 'cedarpolicy.com-cli' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cedarpolicy.com-cli' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CedarpolicycomcliPackage = typeof cedarpolicycomcliPackage
