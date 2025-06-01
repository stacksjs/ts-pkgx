/**
 * **sigstore.dev** - Go home.
 *
 * @domain `sigstore.dev`
 *
 * @install `pkgx sigstore.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sigstoredev
 * console.log(pkg.name)        // "sigstore.dev"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sigstore-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sigstoredevPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/sigstore.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sigstore.dev' as const,
  fullPath: 'sigstore.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sigstore.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SigstoredevPackage = typeof sigstoredevPackage
