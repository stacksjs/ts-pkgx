/**
 * **conftest** - Write tests against structured configuration data using the Open Policy Agent Rego query language
 *
 * @domain `conftest.dev`
 * @programs `conftest`
 * @version `0.61.0` (17 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/conftest-dev.md
 * @install `sh <(curl https://pkgx.sh) conftest`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.conftestdev
 * console.log(pkg.name)        // "conftest"
 * console.log(pkg.description) // "Write tests against structured configuration da..."
 * console.log(pkg.programs)    // ["conftest"]
 * console.log(pkg.versions[0]) // "0.61.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/conftest-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const conftestdevPackage = {
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) conftest' as const,
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
  fullPath: 'conftest.dev' as const,
  aliases: [] as const,
}

export type ConftestdevPackage = typeof conftestdevPackage
