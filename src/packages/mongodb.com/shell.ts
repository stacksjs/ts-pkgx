/**
 * **shell** - Package from pantry: mongodb.com/shell
 *
 * @domain `mongodb.com/shell`
 *
 * @install `launchpad install mongodb.com/shell`
 * @dependencies `nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mongodbcomshell
 * console.log(pkg.name)        // "shell"
 * console.log(pkg.description) // "Package from pantry: mongodb.com/shell"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mongodb-com/shell.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mongodbcomshellPackage = {
  /**
   * The display name of this package.
   */
  name: 'shell' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mongodb.com/shell' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mongodb.com/shell' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mongodb.com/shell' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mongodb.com/shell -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mongodb.com/shell' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mongodb.com/shell/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MongodbcomshellPackage = typeof mongodbcomshellPackage
