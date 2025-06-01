/**
 * **synth** - Crafters of fine Open Source products
 *
 * @domain `getsynth.com`
 *
 * @install `pkgx getsynth.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getsynthcom
 * console.log(pkg.name)        // "synth"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getsynth-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getsynthcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'synth' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/getsynth.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getsynth.com' as const,
  fullPath: 'getsynth.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx getsynth.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GetsynthcomPackage = typeof getsynthcomPackage
