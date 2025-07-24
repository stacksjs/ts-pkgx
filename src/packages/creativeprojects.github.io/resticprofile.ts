/**
 * **resticprofile** - Package from pantry: creativeprojects.github.io/resticprofile
 *
 * @domain `creativeprojects.github.io/resticprofile`
 *
 * @install `launchpad install creativeprojects.github.io/resticprofile`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.creativeprojectsgithubioresticprofile
 * console.log(pkg.name)        // "resticprofile"
 * console.log(pkg.description) // "Package from pantry: creativeprojects.github.io..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/creativeprojects-github-io/resticprofile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const creativeprojectsgithubioresticprofilePackage = {
  /**
   * The display name of this package.
   */
  name: 'resticprofile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'creativeprojects.github.io/resticprofile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: creativeprojects.github.io/resticprofile' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install creativeprojects.github.io/resticprofile' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +creativeprojects.github.io/resticprofile -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install creativeprojects.github.io/resticprofile' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/creativeprojects.github.io/resticprofile/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CreativeprojectsgithubioresticprofilePackage = typeof creativeprojectsgithubioresticprofilePackage
