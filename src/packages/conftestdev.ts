/**
 * **conftest** - Write tests against structured configuration data using the Open Policy Agent Rego query language
 *
 * @domain `conftest.dev`
 * @programs `conftest`
 * @version `0.62.0` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install conftest`
 * @name `conftest`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.conftest
 * // Or access via domain
 * const samePkg = pantry.conftestdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "conftest"
 * console.log(pkg.description) // "Write tests against structured configuration da..."
 * console.log(pkg.programs)    // ["conftest"]
 * console.log(pkg.versions[0]) // "0.62.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/conftest-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const conftestPackage = {
  /**
   * The display name of this package.
   */
  name: 'conftest' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'conftest.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Write tests against structured configuration data using the Open Policy Agent Rego query language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/conftest.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install conftest' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'conftest',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.62.0',
    '0.61.2',
    '0.61.1',
    '0.61.0',
    '0.60.0',
    '0.59.0',
    '0.58.0',
    '0.57.0',
    '0.56.0',
    '0.55.0',
    '0.54.0',
    '0.53.0',
    '0.52.0',
    '0.51.0',
    '0.50.0',
    '0.49.1',
    '0.49.0',
    '0.48.0',
    '0.47.0',
    '0.46.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) conftest -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install conftest' as const,
}

export type ConftestPackage = typeof conftestPackage
