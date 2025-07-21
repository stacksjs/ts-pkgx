/**
 * **theora.org** - Package from pantry: theora.org
 *
 * @domain `theora.org`
 *
 * @install `launchpad install theora.org`
 * @dependencies `xiph.org/ogg`, `xiph.org/vorbis`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.theoraorg
 * console.log(pkg.name)        // "theora.org"
 * console.log(pkg.description) // "Package from pantry: theora.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/theora-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const theoraorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'theora.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'theora.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: theora.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install theora.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +theora.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install theora.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/ogg',
    'xiph.org/vorbis',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/theora.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TheoraorgPackage = typeof theoraorgPackage
