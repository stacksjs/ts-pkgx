/**
 * **bacon** - Package from pantry: dystroy.org/bacon
 *
 * @domain `dystroy.org/bacon`
 *
 * @install `launchpad install dystroy.org/bacon`
 * @dependencies `linux:alsa-project.org/alsa-lib` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dystroyorgbacon
 * console.log(pkg.name)        // "bacon"
 * console.log(pkg.description) // "Package from pantry: dystroy.org/bacon"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dystroy-org/bacon.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dystroyorgbaconPackage = {
  /**
   * The display name of this package.
   */
  name: 'bacon' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dystroy.org/bacon' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dystroy.org/bacon' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dystroy.org/bacon' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dystroy.org/bacon -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dystroy.org/bacon' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:alsa-project.org/alsa-lib',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dystroy.org/bacon/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DystroyorgbaconPackage = typeof dystroyorgbaconPackage
