/**
 * **operator-sdk** - Package from pantry: operatorframework.io/operator-sdk
 *
 * @domain `operatorframework.io/operator-sdk`
 *
 * @install `launchpad install operatorframework.io/operator-sdk`
 * @dependencies `go.dev^1.19`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.operatorframeworkiooperatorsdk
 * console.log(pkg.name)        // "operator-sdk"
 * console.log(pkg.description) // "Package from pantry: operatorframework.io/opera..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/operatorframework-io/operator-sdk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const operatorframeworkiooperatorsdkPackage = {
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
  description: 'Package from pantry: operatorframework.io/operator-sdk' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install operatorframework.io/operator-sdk' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +operatorframework.io/operator-sdk -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install operatorframework.io/operator-sdk' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/operatorframework.io/operator-sdk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OperatorframeworkiooperatorsdkPackage = typeof operatorframeworkiooperatorsdkPackage
