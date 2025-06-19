/**
 * **avif** - libavif - Library for encoding and decoding .avif files
 *
 * @domain `github.com/AOMediaCodec/libavif`
 * @programs `avifenc`, `avifdec`
 * @version `1.3.0` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/AOMediaCodec/libavif -- $SHELL -i`
 * @aliases `avif`
 * @dependencies `aomedia.googlesource.com/aom^3`, `libpng.org^1`, `libjpeg-turbo.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.avif
 * // Or access via domain
 * const samePkg = pantry.githubcomaomediacodeclibavif
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libavif"
 * console.log(pkg.description) // "libavif - Library for encoding and decoding .av..."
 * console.log(pkg.programs)    // ["avifenc", "avifdec"]
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AOMediaCodec/libavif.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const avifPackage = {
  /**
   * The display name of this package.
   */
  name: 'libavif' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AOMediaCodec/libavif' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'libavif - Library for encoding and decoding .avif files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AOMediaCodec/libavif/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/AOMediaCodec/libavif -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'avifenc',
    'avifdec',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'aomedia.googlesource.com/aom^3',
    'libpng.org^1',
    'libjpeg-turbo.org^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
    '1.2.1',
    '1.2.0',
    '1.1.1',
    '1.1.0',
    '1.0.4',
    '1.0.3',
    '1.0.2',
    '1.0.1',
    '1.0.0',
    '0.11.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'avif',
  ] as const,
}

export type AvifPackage = typeof avifPackage
