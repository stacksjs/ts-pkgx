/**
 * **oc** - Crafters of fine Open Source products
 *
 * @domain `openshift.com`
 *
 * @install `pkgx openshift.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openshiftcom
 * console.log(pkg.name)        // "oc"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openshift-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openshiftcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'oc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openshift.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openshift.com' as const,
  fullPath: 'openshift.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openshift.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenshiftcomPackage = typeof openshiftcomPackage
