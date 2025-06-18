/**
 * **qpdf** - qpdf: A content-preserving PDF document transformer
 *
 * @domain `qpdf.sourceforge.io`
 * @programs `qpdf`
 * @version `12.2.0` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) qpdf`
 * @name `qpdf`
 * @dependencies `zlib.net^1`, `libjpeg-turbo.org^2`, `openssl.org^1.1`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.qpdf
 * // Or access via domain
 * const samePkg = pantry.qpdfsourceforgeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "qpdf"
 * console.log(pkg.description) // "qpdf: A content-preserving PDF document transfo..."
 * console.log(pkg.programs)    // ["qpdf"]
 * console.log(pkg.versions[0]) // "12.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/qpdf-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qpdfPackage = {
  /**
   * The display name of this package.
   */
  name: 'qpdf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'qpdf.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'qpdf: A content-preserving PDF document transformer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/qpdf.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) qpdf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'qpdf',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'libjpeg-turbo.org^2',
    'openssl.org^1.1',
    'gnutls.org^3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '12.2.0',
    '12.1.0',
    '12.0.0',
    '11.10.1',
    '11.10.0',
    '11.9.1',
    '11.9.0',
    '11.8.0',
    '11.7.0',
    '11.6.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'qpdf.sourceforge.io' as const,
}

export type QpdfPackage = typeof qpdfPackage
