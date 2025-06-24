/**
 * **cairographics.org** - Package from pantry: cairographics.org
 *
 * @domain `cairographics.org`
 *
 * @install `launchpad install cairographics.org`
 * @dependencies `libpng.org@1`, `pixman.org^0.40.0`, `freetype.org@2`, ... (+8 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cairographicsorg
 * console.log(pkg.name)        // "cairographics.org"
 * console.log(pkg.description) // "Package from pantry: cairographics.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cairographics-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cairographicsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cairographics.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cairographics.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cairographics.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cairographics.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cairographics.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cairographics.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org@1',
    'pixman.org^0.40.0',
    'freetype.org@2',
    'gnome.org/glib@2',
    'freedesktop.org/fontconfig@2',
    'sourceware.org/bzip2@1',
    'x.org/x11',
    'x.org/xcb',
    'x.org/exts',
    'x.org/xrender',
    'oberhumer.com/lzo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cairographics.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CairographicsorgPackage = typeof cairographicsorgPackage
