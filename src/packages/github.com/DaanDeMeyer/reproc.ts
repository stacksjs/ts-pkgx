/**
 * **reproc** - Package from pantry: github.com/DaanDeMeyer/reproc
 *
 * @domain `github.com/DaanDeMeyer/reproc`
 *
 * @install `launchpad install github.com/DaanDeMeyer/reproc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdaandemeyerreproc
 * console.log(pkg.name)        // "reproc"
 * console.log(pkg.description) // "Package from pantry: github.com/DaanDeMeyer/reproc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/DaanDeMeyer/reproc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdaandemeyerreprocPackage = {
  /**
   * The display name of this package.
   */
  name: 'reproc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/DaanDeMeyer/reproc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/DaanDeMeyer/reproc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/DaanDeMeyer/reproc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/DaanDeMeyer/reproc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/DaanDeMeyer/reproc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/DaanDeMeyer/reproc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdaandemeyerreprocPackage = typeof githubcomdaandemeyerreprocPackage
