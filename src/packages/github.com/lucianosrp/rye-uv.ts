/**
 * **rye-uv** - Package from pantry: github.com/lucianosrp/rye-uv
 *
 * @domain `github.com/lucianosrp/rye-uv`
 *
 * @install `launchpad install github.com/lucianosrp/rye-uv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlucianosrpryeuv
 * console.log(pkg.name)        // "rye-uv"
 * console.log(pkg.description) // "Package from pantry: github.com/lucianosrp/rye-uv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lucianosrp/rye-uv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlucianosrpryeuvPackage = {
  /**
   * The display name of this package.
   */
  name: 'rye-uv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lucianosrp/rye-uv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/lucianosrp/rye-uv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/lucianosrp/rye-uv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/lucianosrp/rye-uv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/lucianosrp/rye-uv' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lucianosrp/rye-uv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlucianosrpryeuvPackage = typeof githubcomlucianosrpryeuvPackage
