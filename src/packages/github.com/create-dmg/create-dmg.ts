/**
 * **create-dmg** - Package from pantry: github.com/create-dmg/create-dmg
 *
 * @domain `github.com/create-dmg/create-dmg`
 *
 * @install `launchpad install github.com/create-dmg/create-dmg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcreatedmgcreatedmg
 * console.log(pkg.name)        // "create-dmg"
 * console.log(pkg.description) // "Package from pantry: github.com/create-dmg/crea..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/create-dmg/create-dmg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcreatedmgcreatedmgPackage = {
  /**
   * The display name of this package.
   */
  name: 'create-dmg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/create-dmg/create-dmg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/create-dmg/create-dmg' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/create-dmg/create-dmg' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/create-dmg/create-dmg -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/create-dmg/create-dmg' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/create-dmg/create-dmg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcreatedmgcreatedmgPackage = typeof githubcomcreatedmgcreatedmgPackage
