/**
 * **code-cli** - Package from pantry: microsoft.com/code-cli
 *
 * @domain `microsoft.com/code-cli`
 *
 * @install `launchpad install microsoft.com/code-cli`
 * @dependencies `openssl.org@1.1`, `zlib.net@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microsoftcomcodecli
 * console.log(pkg.name)        // "code-cli"
 * console.log(pkg.description) // "Package from pantry: microsoft.com/code-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/code-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microsoftcomcodecliPackage = {
  /**
   * The display name of this package.
   */
  name: 'code-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/code-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: microsoft.com/code-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install microsoft.com/code-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +microsoft.com/code-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install microsoft.com/code-cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org@1.1',
    'zlib.net@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/code-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MicrosoftcomcodecliPackage = typeof microsoftcomcodecliPackage
