/**
 * **libavif** - Package from pantry: github.com/AOMediaCodec/libavif
 *
 * @domain `github.com/AOMediaCodec/libavif`
 *
 * @install `launchpad install github.com/AOMediaCodec/libavif`
 * @dependencies `aomedia.googlesource.com/aom^3`, `libpng.org^1`, `libjpeg-turbo.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomaomediacodeclibavif
 * console.log(pkg.name)        // "libavif"
 * console.log(pkg.description) // "Package from pantry: github.com/AOMediaCodec/li..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AOMediaCodec/libavif.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomaomediacodeclibavifPackage = {
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
  description: 'Package from pantry: github.com/AOMediaCodec/libavif' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/AOMediaCodec/libavif' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/AOMediaCodec/libavif -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/AOMediaCodec/libavif' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AOMediaCodec/libavif/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomaomediacodeclibavifPackage = typeof githubcomaomediacodeclibavifPackage
