/**
 * **vhs** - Package from pantry: charm.sh/vhs
 *
 * @domain `charm.sh/vhs`
 *
 * @install `launchpad install charm.sh/vhs`
 * @dependencies `ffmpeg.org>=5`, `tsl0922.github.io/ttyd^1.7.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.charmshvhs
 * console.log(pkg.name)        // "vhs"
 * console.log(pkg.description) // "Package from pantry: charm.sh/vhs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/vhs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charmshvhsPackage = {
  /**
   * The display name of this package.
   */
  name: 'vhs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/vhs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: charm.sh/vhs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install charm.sh/vhs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +charm.sh/vhs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install charm.sh/vhs' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ffmpeg.org>=5',
    'tsl0922.github.io/ttyd^1.7.2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/vhs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CharmshvhsPackage = typeof charmshvhsPackage
