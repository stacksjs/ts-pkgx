/**
 * **ansible** - Crafters of fine Open Source products
 *
 * @domain `ansible.com`
 *
 * @install `pkgx ansible.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ansiblecom
 * console.log(pkg.name)        // "ansible"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ansible-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ansiblecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'ansible' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ansible.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ansible.com' as const,
  fullPath: 'ansible.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ansible.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AnsiblecomPackage = typeof ansiblecomPackage
