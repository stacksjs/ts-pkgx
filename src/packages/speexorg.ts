/**
 * **speex.org** - Package from pantry: speex.org
 *
 * @domain `speex.org`
 *
 * @install `launchpad install speex.org`
 * @dependencies `xiph.org/ogg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.speexorg
 * console.log(pkg.name)        // "speex.org"
 * console.log(pkg.description) // "Package from pantry: speex.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/speex-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const speexorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'speex.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'speex.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: speex.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install speex.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +speex.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install speex.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/ogg',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/speex.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SpeexorgPackage = typeof speexorgPackage
