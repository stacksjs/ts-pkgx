/**
 * **connectrpc.org** - Go home.
 *
 * @domain `connectrpc.org`
 *
 * @install `pkgx connectrpc.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.connectrpcorg
 * console.log(pkg.name)        // "connectrpc.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/connectrpc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const connectrpcorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/connectrpc.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'connectrpc.org' as const,
  fullPath: 'connectrpc.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx connectrpc.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ConnectrpcorgPackage = typeof connectrpcorgPackage
