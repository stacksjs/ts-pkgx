/**
 * **qpdf.sourceforge.io** - Package from pantry: qpdf.sourceforge.io
 *
 * @domain `qpdf.sourceforge.io`
 *
 * @install `launchpad install qpdf.sourceforge.io`
 * @dependencies `zlib.net^1`, `libjpeg-turbo.org^2`, `openssl.org^1.1`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.qpdfsourceforgeio
 * console.log(pkg.name)        // "qpdf.sourceforge.io"
 * console.log(pkg.description) // "Package from pantry: qpdf.sourceforge.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/qpdf-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qpdfsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'qpdf.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'qpdf.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: qpdf.sourceforge.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install qpdf.sourceforge.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +qpdf.sourceforge.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install qpdf.sourceforge.io' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/qpdf.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type QpdfsourceforgeioPackage = typeof qpdfsourceforgeioPackage
