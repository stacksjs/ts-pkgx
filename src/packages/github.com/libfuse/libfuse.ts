/**
 * **libfuse** - Package from pantry: github.com/libfuse/libfuse
 *
 * @domain `github.com/libfuse/libfuse`
 *
 * @install `launchpad install github.com/libfuse/libfuse`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlibfuselibfuse
 * console.log(pkg.name)        // "libfuse"
 * console.log(pkg.description) // "Package from pantry: github.com/libfuse/libfuse"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libfuse/libfuse.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlibfuselibfusePackage = {
  /**
   * The display name of this package.
   */
  name: 'libfuse' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libfuse/libfuse' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/libfuse/libfuse' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/libfuse/libfuse' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/libfuse/libfuse -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/libfuse/libfuse' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libfuse/libfuse/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlibfuselibfusePackage = typeof githubcomlibfuselibfusePackage
