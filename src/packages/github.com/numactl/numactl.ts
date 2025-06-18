/**
 * **numactl/numactl** - NUMA support for Linux
 *
 * @domain `github.com/numactl/numactl`
 * @version `2.0.16` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/numactl/numactl -- $SHELL -i`
 * @aliases `numactl/numactl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.numactlnumactl
 * // Or access via domain
 * const samePkg = pantry.githubcomnumactlnumactl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/numactl/numactl"
 * console.log(pkg.description) // "NUMA support for Linux"
 * console.log(pkg.versions[0]) // "2.0.16" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/numactl/numactl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const numactlnumactlPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/numactl/numactl' as const,
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
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/numactl/numactl -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.16',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'numactl/numactl',
  ] as const,
  fullPath: 'github.com/numactl/numactl' as const,
}

export type NumactlnumactlPackage = typeof numactlnumactlPackage
