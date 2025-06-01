/**
 * **PortAudio** - Crafters of fine Open Source products
 *
 * @domain `portaudio.com`
 * @version `19.7.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/portaudio-com.md
 *
 * @install `pkgx portaudio.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.portaudiocom
 * console.log(pkg.name)        // "PortAudio"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * console.log(pkg.versions[0]) // "19.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/portaudio-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const portaudiocomPackage = {
  /**
   * The display name of this package.
   */
  name: 'PortAudio' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '19.7.0',
  ] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/portaudio.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'portaudio.com' as const,
  fullPath: 'portaudio.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx portaudio.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PortaudiocomPackage = typeof portaudiocomPackage
