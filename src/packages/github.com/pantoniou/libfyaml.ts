/**
 * **github.com/pantoniou/libfyaml** - pkgx package
 *
 * @domain `github.com/pantoniou/libfyaml`
 * @version `0.9.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/pantoniou/libfyaml`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompantonioulibfyaml
 * console.log(pkg.name)        // "github.com/pantoniou/libfyaml"
 * console.log(pkg.versions[0]) // "0.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/pantoniou/libfyaml.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompantonioulibfyamlPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/pantoniou/libfyaml' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/pantoniou/libfyaml' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/pantoniou/libfyaml/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/pantoniou/libfyaml' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/pantoniou/libfyaml -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/pantoniou/libfyaml' as const,
}

export type GithubcompantonioulibfyamlPackage = typeof githubcompantonioulibfyamlPackage
