/**
 * **libsixel/libsixel** - Mirror of "sixel" original version (kmiya's sixel). The origin of libsixel.
 *
 * @domain `github.com/libsixel/libsixel`
 * @programs `img2sixel`, `sixel2png`, `libsixel-config`
 * @version `1.10.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/libsixel/libsixel -- $SHELL -i`
 * @aliases `libsixel/libsixel`
 * @dependencies `libjpeg-turbo.org`, `libpng.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libsixellibsixel
 * // Or access via domain
 * const samePkg = pantry.githubcomlibsixellibsixel
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/libsixel/libsixel"
 * console.log(pkg.description) // "Mirror of "sixel" original version (kmiya's six..."
 * console.log(pkg.programs)    // ["img2sixel", "sixel2png", ...]
 * console.log(pkg.versions[0]) // "1.10.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libsixel/libsixel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsixellibsixelPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/libsixel/libsixel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libsixel/libsixel' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Mirror of "sixel" original version (kmiya\'s sixel). The origin of libsixel.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libsixel/libsixel/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/libsixel/libsixel -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'img2sixel',
    'sixel2png',
    'libsixel-config',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libjpeg-turbo.org',
    'libpng.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.10.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libsixel/libsixel',
  ] as const,
  fullPath: 'github.com/libsixel/libsixel' as const,
}

export type LibsixellibsixelPackage = typeof libsixellibsixelPackage
