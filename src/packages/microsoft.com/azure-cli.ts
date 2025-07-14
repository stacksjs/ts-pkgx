/**
 * **azure-cli** - Package from pantry: microsoft.com/azure-cli
 *
 * @domain `microsoft.com/azure-cli`
 *
 * @install `launchpad install microsoft.com/azure-cli`
 * @dependencies `openssl.org@1.1`, `python.org>=3.10<3.12`, `sourceware.org/libffi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microsoftcomazurecli
 * console.log(pkg.name)        // "azure-cli"
 * console.log(pkg.description) // "Package from pantry: microsoft.com/azure-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/azure-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microsoftcomazurecliPackage = {
  /**
   * The display name of this package.
   */
  name: 'azure-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/azure-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: microsoft.com/azure-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install microsoft.com/azure-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +microsoft.com/azure-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install microsoft.com/azure-cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org@1.1',
    'python.org>=3.10<3.12',
    'sourceware.org/libffi',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/azure-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MicrosoftcomazurecliPackage = typeof microsoftcomazurecliPackage
