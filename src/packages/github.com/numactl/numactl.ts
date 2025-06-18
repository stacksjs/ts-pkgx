/**
 * **numactl** - NUMA support for Linux
 *
 * @domain `github.com/numactl/numactl`
 * @version `2.0.16` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/numactl/numactl -- $SHELL -i`
 * @dependencies `gnu.org/autoconf@2`, `gnu.org/automake@1`, `gnu.org/libtool@2`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnumactlnumactl
 * console.log(pkg.name)        // "numactl"
 * console.log(pkg.description) // "NUMA support for Linux"
 * console.log(pkg.versions[0]) // "2.0.16" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/numactl/numactl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnumactlnumactlPackage = {
  /**
   * The display name of this package.
   */
  name: 'numactl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/numactl/numactl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'NUMA support for Linux' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/numactl/numactl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/numactl/numactl -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/autoconf@2',
    'gnu.org/automake@1',
    'gnu.org/libtool@2',
    'gnu.org/m4@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.16',
  ] as const,
  aliases: [] as const,
}

export type GithubcomnumactlnumactlPackage = typeof githubcomnumactlnumactlPackage
