/**
 * **vamp-plugins.org** - Package from pantry: vamp-plugins.org
 *
 * @domain `vamp-plugins.org`
 *
 * @install `launchpad install vamp-plugins.org`
 * @dependencies `xiph.org/flac^1.4`, `xiph.org/ogg^1.3`, `github.com/libsndfile/libsndfile^1.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vamppluginsorg
 * console.log(pkg.name)        // "vamp-plugins.org"
 * console.log(pkg.description) // "Package from pantry: vamp-plugins.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vamp-plugins-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vamppluginsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'vamp-plugins.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vamp-plugins.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vamp-plugins.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install vamp-plugins.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +vamp-plugins.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install vamp-plugins.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/flac^1.4',
    'xiph.org/ogg^1.3',
    'github.com/libsndfile/libsndfile^1.2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vamp-plugins.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VamppluginsorgPackage = typeof vamppluginsorgPackage
