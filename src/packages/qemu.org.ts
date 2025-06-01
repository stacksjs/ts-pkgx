/**
 * **qemu** - Crafters of fine Open Source products
 *
 * @domain `qemu.org`
 *
 * @install `pkgx qemu.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.qemuorg
 * console.log(pkg.name)        // "qemu"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/qemu-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qemuorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'qemu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/qemu.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'qemu.org' as const,
  fullPath: 'qemu.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx qemu.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type QemuorgPackage = typeof qemuorgPackage
