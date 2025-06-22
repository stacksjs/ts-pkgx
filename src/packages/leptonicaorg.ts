/**
 * **leptonica.org** - Package from pantry: leptonica.org
 *
 * @domain `leptonica.org`
 *
 * @install `launchpad install leptonica.org`
 * @dependencies `giflib.sourceforge.io@5`, `libjpeg-turbo.org@2`, `libpng.org@1`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.leptonicaorg
 * console.log(pkg.name)        // "leptonica.org"
 * console.log(pkg.description) // "Package from pantry: leptonica.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leptonica-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leptonicaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'leptonica.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leptonica.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: leptonica.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install leptonica.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +leptonica.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install leptonica.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'giflib.sourceforge.io@5',
    'libjpeg-turbo.org@2',
    'libpng.org@1',
    'simplesystems.org/libtiff@4',
    'openjpeg.org',
    'google.com/webp',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/leptonica.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LeptonicaorgPackage = typeof leptonicaorgPackage
