/**
 * **p7zip** - Package from pantry: github.com/p7zip-project/p7zip
 *
 * @domain `github.com/p7zip-project/p7zip`
 *
 * @install `launchpad install github.com/p7zip-project/p7zip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomp7zipprojectp7zip
 * console.log(pkg.name)        // "p7zip"
 * console.log(pkg.description) // "Package from pantry: github.com/p7zip-project/p..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/p7zip-project/p7zip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomp7zipprojectp7zipPackage = {
  /**
   * The display name of this package.
   */
  name: 'p7zip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/p7zip-project/p7zip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/p7zip-project/p7zip' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/p7zip-project/p7zip' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/p7zip-project/p7zip -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/p7zip-project/p7zip' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/p7zip-project/p7zip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomp7zipprojectp7zipPackage = typeof githubcomp7zipprojectp7zipPackage
