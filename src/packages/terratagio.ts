/**
 * **terratag.io** - Package from pantry: terratag.io
 *
 * @domain `terratag.io`
 *
 * @install `launchpad install terratag.io`
 * @dependencies `terraform.io>=0.12`, `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.terratagio
 * console.log(pkg.name)        // "terratag.io"
 * console.log(pkg.description) // "Package from pantry: terratag.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/terratag-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terratagioPackage = {
  /**
   * The display name of this package.
   */
  name: 'terratag.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'terratag.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: terratag.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install terratag.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'terraform.io>=0.12',
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/terratag.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TerratagioPackage = typeof terratagioPackage
