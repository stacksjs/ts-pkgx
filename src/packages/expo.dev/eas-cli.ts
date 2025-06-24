/**
 * **eas-cli** - Package from pantry: expo.dev/eas-cli
 *
 * @domain `expo.dev/eas-cli`
 *
 * @install `launchpad install expo.dev/eas-cli`
 * @dependencies `nodejs.org^18.18 || >=20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.expodeveascli
 * console.log(pkg.name)        // "eas-cli"
 * console.log(pkg.description) // "Package from pantry: expo.dev/eas-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/expo-dev/eas-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const expodeveascliPackage = {
  /**
   * The display name of this package.
   */
  name: 'eas-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'expo.dev/eas-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: expo.dev/eas-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install expo.dev/eas-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +expo.dev/eas-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install expo.dev/eas-cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^18.18 || >=20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/expo.dev/eas-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ExpodeveascliPackage = typeof expodeveascliPackage
