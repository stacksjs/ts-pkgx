/**
 * **macos-term-size** - Package from pantry: github.com/sindresorhus/macos-term-size
 *
 * @domain `github.com/sindresorhus/macos-term-size`
 *
 * @install `launchpad install github.com/sindresorhus/macos-term-size`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsindresorhusmacostermsize
 * console.log(pkg.name)        // "macos-term-size"
 * console.log(pkg.description) // "Package from pantry: github.com/sindresorhus/ma..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sindresorhus/macos-term-size.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsindresorhusmacostermsizePackage = {
  /**
   * The display name of this package.
   */
  name: 'macos-term-size' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sindresorhus/macos-term-size' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/sindresorhus/macos-term-size' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/sindresorhus/macos-term-size' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/sindresorhus/macos-term-size -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/sindresorhus/macos-term-size' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sindresorhus/macos-term-size/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsindresorhusmacostermsizePackage = typeof githubcomsindresorhusmacostermsizePackage
