/**
 * **lux** - Package from pantry: github.com/iawia002/lux
 *
 * @domain `github.com/iawia002/lux`
 *
 * @install `launchpad install github.com/iawia002/lux`
 * @dependencies `ffmpeg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomiawia002lux
 * console.log(pkg.name)        // "lux"
 * console.log(pkg.description) // "Package from pantry: github.com/iawia002/lux"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/iawia002/lux.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomiawia002luxPackage = {
  /**
   * The display name of this package.
   */
  name: 'lux' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/iawia002/lux' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/iawia002/lux' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/iawia002/lux' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/iawia002/lux -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/iawia002/lux' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ffmpeg.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/iawia002/lux/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomiawia002luxPackage = typeof githubcomiawia002luxPackage
