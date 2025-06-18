/**
 * **opus-codec.org** - Package from pantry: opus-codec.org
 *
 * @domain `opus-codec.org`
 *
 * @install `launchpad install opus-codec.org`
 * @dependencies `gnu.org/autoconf^2`, `gnu.org/automake^1.16`, `gnu.org/libtool^2.4`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opuscodecorg
 * console.log(pkg.name)        // "opus-codec.org"
 * console.log(pkg.description) // "Package from pantry: opus-codec.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opus-codec-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opuscodecorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'opus-codec.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opus-codec.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: opus-codec.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install opus-codec.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/autoconf^2',
    'gnu.org/automake^1.16',
    'gnu.org/libtool^2.4',
    'gnu.org/wget',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opus-codec.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpuscodecorgPackage = typeof opuscodecorgPackage
