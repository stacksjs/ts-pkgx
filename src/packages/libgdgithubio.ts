/**
 * **libgd.github.io** - Package from pantry: libgd.github.io
 *
 * @domain `libgd.github.io`
 *
 * @install `launchpad install libgd.github.io`
 * @dependencies `freedesktop.org/fontconfig`, `freetype.org`, `libjpeg-turbo.org`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libgdgithubio
 * console.log(pkg.name)        // "libgd.github.io"
 * console.log(pkg.description) // "Package from pantry: libgd.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libgd-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libgdgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libgd.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libgd.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libgd.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libgd.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libgd.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libgd.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/fontconfig',
    'freetype.org',
    'libjpeg-turbo.org',
    'github.com/AOMediaCodec/libavif',
    'libpng.org',
    'simplesystems.org/libtiff',
    'google.com/webp',
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libgd.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibgdgithubioPackage = typeof libgdgithubioPackage
