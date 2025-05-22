/**
 * Generated from pkgx.dev data
 */
export const jenkinsioPackage = {
  programs: [
    "jenkins-lts",
    "jenkins-lts-cli",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openjdk.org<20",
  ] as const,
  versions: [
    "2.504.1",
    "2.492.3",
    "2.492.2",
    "2.492.1",
    "2.479.3",
    "2.479.2",
    "2.479.1",
    "2.462.3",
    "2.462.2",
    "2.462.1",
    "2.452.3",
    "2.452.2",
    "2.452.1",
    "2.440.3",
    "2.440.2",
    "2.440.1",
    "2.426.3",
    "2.426.2",
  ] as const,
  aliases: [
    "jenkins-lts",
  ] as const,
  name: "jenkins.io" as const,
  domain: "jenkins.io" as const,
  description: "Package information for jenkins.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/jenkins.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +jenkins.io -- $SHELL -i" as const,
}

export type JenkinsioPackage = typeof jenkinsioPackage
