/**
 * **github.com/KarypisLab/GKlib** - A library of various helper routines and frameworks used by many of the lab's software
 *
 * @domain `github.com/KarypisLab/GKlib`
 * @programs `cmpnbrs`, `csrcnv`, `fis`, `gkgraph`, `gkrw`, ... (+1 more)
 * @version `5.1.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/KarypisLab/GKlib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkarypislabgklib
 * console.log(pkg.name)        // "github.com/KarypisLab/GKlib"
 * console.log(pkg.description) // "A library of various helper routines and framew..."
 * console.log(pkg.programs)    // ["cmpnbrs", "csrcnv", ...]
 * console.log(pkg.versions[0]) // "5.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/KarypisLab/GKlib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkarypislabgklibPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/KarypisLab/GKlib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/KarypisLab/GKlib' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A library of various helper routines and frameworks used by many of the lab\'s software' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/KarypisLab/GKlib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/KarypisLab/GKlib' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cmpnbrs',
    'csrcnv',
    'fis',
    'gkgraph',
    'gkrw',
    'm2mnbrs',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.1.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/KarypisLab/GKlib -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/KarypisLab/GKlib' as const,
}

export type GithubcomkarypislabgklibPackage = typeof githubcomkarypislabgklibPackage
