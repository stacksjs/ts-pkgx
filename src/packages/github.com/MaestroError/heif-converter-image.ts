/**
 * **heif-converter** - heif-converter is a versatile command-line application, along with a Docker image, that offers an easy and efficient way to convert HEIC (and AVIF) images to other common formats like JPEG and PNG, and vice versa. It leverages the go-libheif module, a GoLang wrapper for the libheif library.
 *
 * @domain `github.com/MaestroError/heif-converter-image`
 * @programs `heif-converter`
 * @version `2023.6.23` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) heif-converter`
 * @name `heif-converter`
 * @aliases `MaestroError/heif-converter-image`
 * @dependencies `github.com/strukturag/libheif`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.heifconverter
 * // Or access via domain
 * const samePkg = pantry.githubcommaestroerrorheifconverterimage
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "heif-converter"
 * console.log(pkg.description) // "heif-converter is a versatile command-line appl..."
 * console.log(pkg.programs)    // ["heif-converter"]
 * console.log(pkg.versions[0]) // "2023.6.23" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/MaestroError/heif-converter-image.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const heifconverterPackage = {
  /**
   * The display name of this package.
   */
  name: 'heif-converter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/MaestroError/heif-converter-image' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'heif-converter is a versatile command-line application, along with a Docker image, that offers an easy and efficient way to convert HEIC (and AVIF) images to other common formats like JPEG and PNG, and vice versa. It leverages the go-libheif module, a GoLang wrapper for the libheif library.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/MaestroError/heif-converter-image/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) heif-converter' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'heif-converter',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/strukturag/libheif',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.6.23',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'MaestroError/heif-converter-image',
  ] as const,
  fullPath: 'github.com/MaestroError/heif-converter-image' as const,
}

export type HeifconverterPackage = typeof heifconverterPackage
