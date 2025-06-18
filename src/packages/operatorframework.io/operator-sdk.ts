/**
 * **operator-sdk** - SDK for building Kubernetes applications. Provides high level APIs, useful abstractions, and project scaffolding.
 *
 * @domain `operatorframework.io/operator-sdk`
 * @programs `operator-sdk`
 * @version `1.40.0` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install operator-sdk`
 * @name `operator-sdk`
 * @dependencies `go.dev^1.19`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.operatorsdk
 * // Or access via domain
 * const samePkg = pantry.operatorframeworkiooperatorsdk
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "operator-sdk"
 * console.log(pkg.description) // "SDK for building Kubernetes applications. Provi..."
 * console.log(pkg.programs)    // ["operator-sdk"]
 * console.log(pkg.versions[0]) // "1.40.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/operatorframework-io/operator-sdk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const operatorsdkPackage = {
  /**
   * The display name of this package.
   */
  name: 'operator-sdk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'operatorframework.io/operator-sdk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'SDK for building Kubernetes applications. Provides high level APIs, useful abstractions, and project scaffolding.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/operatorframework.io/operator-sdk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install operator-sdk' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'operator-sdk',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.40.0',
    '1.39.2',
    '1.39.1',
    '1.39.0',
    '1.38.0',
    '1.37.0',
    '1.36.1',
    '1.36.0',
    '1.35.0',
    '1.34.2',
    '1.34.1',
    '1.34.0',
    '1.33.0',
    '1.32.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'operatorframework.io/operator-sdk' as const,
}

export type OperatorsdkPackage = typeof operatorsdkPackage
