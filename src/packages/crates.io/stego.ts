/**
 * **stego** - 🦕 stego is a steganographic swiss army knife.
 *
 * @domain `crates.io/stego`
 * @programs `stego`
 * @version `2019.10.22` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) stego`
 * @name `stego`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.stego
 * // Or access via domain
 * const samePkg = pantry.cratesiostego
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "stego"
 * console.log(pkg.description) // "🦕 stego is a steganographic swiss army knife."
 * console.log(pkg.programs)    // ["stego"]
 * console.log(pkg.versions[0]) // "2019.10.22" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/stego.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const stegoPackage = {
  /**
   * The display name of this package.
   */
  name: 'stego' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/stego' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🦕 stego is a steganographic swiss army knife.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/stego/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) stego' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'stego',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2019.10.22',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/stego' as const,
}

export type StegoPackage = typeof stegoPackage
