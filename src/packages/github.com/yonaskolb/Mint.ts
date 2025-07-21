/**
 * **Mint** - Package from pantry: github.com/yonaskolb/Mint
 *
 * @domain `github.com/yonaskolb/Mint`
 *
 * @install `launchpad install github.com/yonaskolb/Mint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomyonaskolbmint
 * console.log(pkg.name)        // "Mint"
 * console.log(pkg.description) // "Package from pantry: github.com/yonaskolb/Mint"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/yonaskolb/Mint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomyonaskolbmintPackage = {
  /**
   * The display name of this package.
   */
  name: 'Mint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/yonaskolb/Mint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/yonaskolb/Mint' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/yonaskolb/Mint' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/yonaskolb/Mint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/yonaskolb/Mint' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/yonaskolb/Mint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomyonaskolbmintPackage = typeof githubcomyonaskolbmintPackage
