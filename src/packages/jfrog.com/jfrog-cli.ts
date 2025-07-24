/**
 * **jfrog-cli** - Package from pantry: jfrog.com/jfrog-cli
 *
 * @domain `jfrog.com/jfrog-cli`
 *
 * @install `launchpad install jfrog.com/jfrog-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jfrogcomjfrogcli
 * console.log(pkg.name)        // "jfrog-cli"
 * console.log(pkg.description) // "Package from pantry: jfrog.com/jfrog-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jfrog-com/jfrog-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jfrogcomjfrogcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'jfrog-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jfrog.com/jfrog-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jfrog.com/jfrog-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jfrog.com/jfrog-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jfrog.com/jfrog-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jfrog.com/jfrog-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jfrog.com/jfrog-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JfrogcomjfrogcliPackage = typeof jfrogcomjfrogcliPackage
