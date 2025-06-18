/**
 * **opus-codec.org** - Modern audio compression for the internet.
 *
 * @domain `opus-codec.org`
 * @version `1.5.2` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +opus-codec.org -- $SHELL -i`
 * @dependencies `gnu.org/autoconf@2`, `gnu.org/automake@1.16`, `gnu.org/libtool@2.4`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opuscodecorg
 * console.log(pkg.name)        // "opus-codec.org"
 * console.log(pkg.description) // "Modern audio compression for the internet."
 * console.log(pkg.versions[0]) // "1.5.2" (latest)
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
  description: 'Modern audio compression for the internet.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opus-codec.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +opus-codec.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/autoconf@2',
    'gnu.org/automake@1.16',
    'gnu.org/libtool@2.4',
    'gnu.org/wget',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.0',
    '1.3.1',
  ] as const,
  aliases: [] as const,
}

export type OpuscodecorgPackage = typeof opuscodecorgPackage
