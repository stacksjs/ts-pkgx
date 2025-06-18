/**
 * **webp** - Mirror only. Please do not send pull requests. See https://chromium.googlesource.com/webm/libwebp/+/HEAD/CONTRIBUTING.md.
 *
 * @domain `google.com/webp`
 * @programs `cwebp`, `dwebp`, `gif2webp`, `img2webp`, `vwebp`, ... (+2 more)
 * @version `1.5.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +google.com/webp -- $SHELL -i`
 * @dependencies `giflib.sourceforge.io^5`, `libjpeg-turbo.org^2`, `libpng.org^1`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomwebp
 * console.log(pkg.name)        // "webp"
 * console.log(pkg.description) // "Mirror only. Please do not send pull requests. ..."
 * console.log(pkg.programs)    // ["cwebp", "dwebp", ...]
 * console.log(pkg.versions[0]) // "1.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/webp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomwebpPackage = {
  /**
   * The display name of this package.
   */
  name: 'webp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/webp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Mirror only. Please do not send pull requests. See https://chromium.googlesource.com/webm/libwebp/+/HEAD/CONTRIBUTING.md.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/webp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +google.com/webp -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cwebp',
    'dwebp',
    'gif2webp',
    'img2webp',
    'vwebp',
    'webpinfo',
    'webpmux',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'giflib.sourceforge.io^5',
    'libjpeg-turbo.org^2',
    'libpng.org^1',
    'simplesystems.org/libtiff^4',
    'gnu.org/wget',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.0',
    '1.4.0',
    '1.3.2',
    '1.3.1',
    '1.3.0',
  ] as const,
  aliases: [] as const,
}

export type GooglecomwebpPackage = typeof googlecomwebpPackage
