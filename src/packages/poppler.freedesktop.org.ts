/**
 * **poppler.freedesktop.org** - Crafters of fine Open Source products
 *
 * @domain `poppler.freedesktop.org`
 * @programs `pdfattach`, `pdfdetach`, `pdffonts`, `pdfimages`, `pdfinfo`
 * @version `1.58.0` (8 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/poppler-freedesktop-org.md
 *
 * @install `pkgx poppler.freedesktop.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.popplerfreedesktoporg
 * console.log(pkg.name)        // "poppler.freedesktop.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * console.log(pkg.programs)    // ["pdfattach", "pdfdetach", ...]
 * console.log(pkg.versions[0]) // "1.58.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/poppler-freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const popplerfreedesktoporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'poppler.freedesktop.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.58.0',
    '1.16.0',
    '25.5.0',
    '25.4.0',
    '25.3.0',
    '25.2.0',
    '25.1.0',
    '24.9.0',
  ] as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pdfattach',
    'pdfdetach',
    'pdffonts',
    'pdfimages',
    'pdfinfo',
  ] as const,
  homepage: 'https://pkgx.dev/pkgs/poppler.freedesktop.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'poppler.freedesktop.org' as const,
  fullPath: 'poppler.freedesktop.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx poppler.freedesktop.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PopplerfreedesktoporgPackage = typeof popplerfreedesktoporgPackage
